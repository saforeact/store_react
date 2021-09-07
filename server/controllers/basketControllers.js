const { Basket, BasketDevice, Device, Brand, Type } = require("../models");
const Stripe = require("stripe");

class BasketController {
  async getBasket(req, res) {
    try {
      const { _id } = req.body;

      let basket = await Basket.findOne({ userId: _id });

      if (basket) {
        let devicesInBasket = await BasketDevice.find({
          basketId: basket._id,
        });

        const resDevices = [];
        for await (const device of devicesInBasket) {
          const findDevice = await Device.findOne({ _id: device.deviceId });
          const brand = await Brand.findOne({ _id: findDevice.brandId });
          const caterory = await Type.findOne({ _id: findDevice.typeId });
          resDevices.push({
            deviceId: findDevice._id,
            counter: device.counter,
            name: findDevice.name,
            brand: brand.name,
            category: caterory.name,
            img: findDevice.img[0],
            price: findDevice.price,
          });
        }
        return res.status(200).json({ devicesInBasket: resDevices });
      } else {
        basket = new Basket({
          userId: _id,
        });
        await basket.save();
        return res.status(200).json({ devicesInBasket: [] });
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async addDeviceToBasket(req, res) {
    try {
      const { _id, idProduct, counter } = req.body;

      let basket = await Basket.findOne({ userId: _id });
      if (basket) {
        const device = await BasketDevice.findOne({
          deviceId: idProduct,
          basketId: basket._id,
        });

        if (device) {
          await BasketDevice.findOneAndUpdate(
            { deviceId: idProduct },
            { counter }
          );
        } else {
          const newDeviceInBusket = new BasketDevice({
            deviceId: idProduct,
            basketId: basket._id,
            counter,
          });

          await newDeviceInBusket.save();
        }

        return res.status(200).json({ message: "Success" });
      }
      return res.status(404).json({ message: "Busket not Found" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async changeCounter(req, res) {
    const { idProduct, counter, _id } = req.body;
    const basket = await Basket.findOne({ userId: _id });
    await BasketDevice.findOneAndUpdate(
      { deviceId: idProduct, basketId: basket._id },
      { counter }
    );
    res.status(200).json({});
  }
  async removeItemFromBasket(req, res) {
    const { idProduct, _id } = req.body;

    const basket = await Basket.findOne({ userId: _id });
    await BasketDevice.findOneAndDelete({
      deviceId: idProduct,
      basketId: basket._id,
    });
    res.status(200).json({});
  }
  async removeAllItemFromBasket(req, res) {
    const { _id } = req.body;

    const basket = await Basket.findOne({ userId: _id });

    const devicesInBasket = await BasketDevice.find({
      basketId: basket._id,
    });

    for await (const item of devicesInBasket) {
      await BasketDevice.findByIdAndDelete(item._id);
    }
    res.status(200).json({});
  }
  async buyDevicesFromBasket(req, res) {
    const { _id } = req.body;

    const basket = await Basket.findOne({ userId: _id });
    const basketDevices = await BasketDevice.find({ basketId: basket._id });

    let line_items = [];
    for await (const item of basketDevices) {
      const device = await Device.findById(item.deviceId);
      line_items.push({
        price_data: {
          unit_amount: device.price * 100,
          currency: "uah",
          product_data: {
            name: device.name,
          },
        },

        quantity: item.counter,
      });
    }

    const stripe = Stripe(process.env.API_KEY_STRIPE);
    const session = await stripe.checkout.sessions.create({
      line_items,
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}success`,
      cancel_url: `${process.env.CLIENT_URL}cart`,
    });
    res.json({ url: session.url });
  }
}

module.exports = new BasketController();
