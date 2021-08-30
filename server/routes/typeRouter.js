const Router = require("express");
const TypeController = require("../controllers/typeControllers");
const router = new Router();

router.get("/", TypeController.getTypes);
router.get("/:id", TypeController.getOneTypes);

module.exports = router;
