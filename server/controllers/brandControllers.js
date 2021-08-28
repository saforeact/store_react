const { Brand } = require("../models");

class BrandController {
  async getAllBrand(req, res) {
    try {
      // const { search } = req.;
      const query = req.query;
      console.log(`query`, query);
      let brands = await Brand.find({});
      if (brands.length) {
        brands = brands.map(
          (item) => item.name[0].toUpperCase() + item.name.slice(1)
        );
      }
      // if (search) {
      //   const test = brands.filter((item) =>
      //     item.name.indexOf(search.toLowerCase())
      //   );
      //   console.log(`test`, test);
      // }
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
