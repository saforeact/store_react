const { Device, Type, Brand } = require("../models");

class DeviceController {
  async convertToDeviсe(dev) {
    console.log(`dev`, dev);
    const type = await Type.findOne({ _id: device.typeId });
    const brand = await Brand.findOne({ _id: device.brandId });
    return {
      _id: dev._id,
      img: dev.img,
      name: dev.name,
      price: `${dev.price} ₴`,
      type: type.name[0].toUpperCase() + type.name.slice(1),
      brand: brand.name[0].toUpperCase() + brand.name.slice(1),
    };
  }
  async getAllDevice(req, res) {
    const { search } = req.query;
    console.log(`req.query`, req.query);
    try {
      let devices = await Device.find({});

      let resDevices = [];

      for (let device of devices) {
        const convertDevice = convertToDeviсe(device);
        console.log(`convertDevice`, convertDevice);
        resDevices.push(convertDevice);
      }
      if (search && search.trim().length) {
        const lowerSearch = search.toLowerCase();
        const test = (value) => value.toLowerCase().indexOf(lowerSearch) !== -1;
        resDevices = resDevices.filter(
          (device) => (test(device.name) || test(device.brand)) && device
        );

        console.log(`resDevices`, resDevices);
      }

      res.status(200).json({ devices: resDevices });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

module.exports = new DeviceController();
