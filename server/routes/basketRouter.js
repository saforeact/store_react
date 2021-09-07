const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketControllers");

router.get("/", BasketController.getBasket);
router.post("/", BasketController.addDeviceToBasket);
router.put("/", BasketController.changeCounter);
router.delete("/", BasketController.removeItemFromBasket);
router.delete("/all", BasketController.removeAllItemFromBasket);
router.get("/buy", BasketController.buyDevicesFromBasket);

module.exports = router;
