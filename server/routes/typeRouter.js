const Router = require("express");
const TypeController = require("../controllers/typeControllers");
const router = new Router();

router.get("/", TypeController.getAllTypes);
router.get("/:id", TypeController.getOneTypes);
router.post("/", TypeController.createType);

module.exports = router;
