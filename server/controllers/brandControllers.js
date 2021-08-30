const { Brand } = require("../models");

class BrandController {
  async getBrand(req, res) {
    try {
      const { search } = req.query;
      let brands = await Brand.find({});
      if (brands.length) {
        if (search) {
          brands = brands.filter(
            (item) => item.name.indexOf(search.toLowerCase()) !== -1 && item
          );
        }
        brands = brands.map(
          (item) => item.name[0].toUpperCase() + item.name.slice(1)
        );
      } else {
        brands = [];
      }
      res.status(200).json({ brands });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  async getOneBrand(req, res) {
    res.json();
  }
}

module.exports = new BrandController();
