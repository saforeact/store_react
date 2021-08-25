const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userControllers");

router.get("/auth", UserController.getUser);
router.post("/edit", UserController.editProfileUser);

module.exports = router;
