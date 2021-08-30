const Router = require("express");
const AuthController = require("../controllers/authControllers");
const router = new Router();

router.post("/registration", AuthController.registrationUser);
router.post("/login", AuthController.authorizationUser);
module.exports = router;
