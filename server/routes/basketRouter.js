const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketControllers");

router.get("/", BasketController.getBasket);
router.post("/", BasketController.addDeviceToBasket);

module.exports = router;
