const { Device, Type, Brand } = require("../models");
async function convertToPresentDeviсe(dev) {
  const type = await Type.findOne({ _id: dev.typeId });
  const brand = await Brand.findOne({ _id: dev.brandId });
  return {
    _id: dev._id,
    img: dev.img,
    name: dev.name,
    price: `${dev.price} ₴`,
    type: type.name[0].toUpperCase() + type.name.slice(1),
    brand: brand.name[0].toUpperCase() + brand.name.slice(1),
  };
}
async function convertToDeviсe(dev) {
  const type = await Type.findOne({ _id: dev.typeId });
  const brand = await Brand.findOne({ _id: dev.brandId });
  return {
    _id: dev._id,
    img: dev.img,
    name: dev.name,
    price: dev.price,
    category: type.name[0].toUpperCase() + type.name.slice(1),
    brand: brand.name[0].toUpperCase() + brand.name.slice(1),
    description: dev.description,
  };
}
class DeviceController {
  async getAllDevice(req, res) {
    const { search, category, brand, idDevice } = req.query;

    try {
      let resDevices = [];
      if (idDevice) {
        const device = await Device.findOne({ _id: idDevice });
        return res
          .status(200)
          .json({ activeDevice: await convertToDeviсe(device) });
      }
      let devices = await Device.find({});

      for (let device of devices) {
        resDevices.push(await convertToPresentDeviсe(device));
      }
      if (search && search.trim().length) {
        const lowerSearch = search.toLowerCase();
        const test = (value) => value.toLowerCase().indexOf(lowerSearch) !== -1;
        resDevices = resDevices.filter(
          (device) => (test(device.name) || test(device.brand)) && device
        );
      }
      if (brand) {
        const lowerBrand = brand.toLowerCase();
        const test = (value) => value.toLowerCase() === lowerBrand;
        resDevices = resDevices.filter(
          (device) => test(device.brand) && device
        );
      }
      if (category) {
        const lowerCategory = category.toLowerCase();
        const test = (value) => value.toLowerCase() === lowerCategory;
        resDevices = resDevices.filter((device) => test(device.type) && device);
      }

      res.status(200).json({ devices: resDevices });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

module.exports = new DeviceController();
