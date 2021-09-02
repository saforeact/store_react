const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const deviceRouter = require("./deviceRouter");
const typeRouter = require("./typeRouter");
const authRouter = require("./authRouter");
const adminRouter = require("./adminRouter");
const { checkToken, checkUserRole } = require("../middlewares");

router.use("/admin", checkToken, checkUserRole, adminRouter);
router.use("/user", checkToken, userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/auth", authRouter);

module.exports = router;
