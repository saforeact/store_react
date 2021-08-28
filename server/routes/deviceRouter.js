const Router = require("express");
const DeviceController = require("../controllers/deviceControllers");
const router = new Router();

router.get("/", DeviceController.getAllDevice);
router.get("/:id", DeviceController.getOneDevice);

module.exports = router;
