const Router = require("express");
const AdminControllers = require("../controllers/adminControllers");

const router = new Router();

router.get("/getUsers", AdminControllers.getAllUsers);
router.post("/setNewUsers", AdminControllers.saveNewUsersList);
router.post("/deleteUsers", AdminControllers.deleteUsers);
router.post("/createProduct", AdminControllers.createProduct);

module.exports = router;
