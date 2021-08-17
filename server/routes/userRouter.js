const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userControllers");

router.post("/registration", UserController.registrationUser);
router.post("/login", UserController.authorizationUser);
router.get("/auth", UserController.check);

module.exports = router;
