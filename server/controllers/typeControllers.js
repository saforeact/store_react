const { Type } = require("../models");

class TypeController {
  async getAllTypes(req, res) {
    try {
      let category = await Type.find({});
      if (category.length) {
        category = category.map(
          (item) => item.name[0].toUpperCase() + item.name.slice(1)
        );
      }
      res.status(200).json({ category });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  async getOneTypes(req, res) {
    res.json();
  }
}

module.exports = new TypeController();
