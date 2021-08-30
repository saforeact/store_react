const Router = require("express");
const BrandController = require("../controllers/brandControllers");
const router = new Router();

router.get("/", BrandController.getBrand);
router.get("/:id", BrandController.getOneBrand);

module.exports = router;
