const { Basket, BasketDevice, Device, Brand, Type } = require("../models");

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
}

module.exports = new BasketController();
