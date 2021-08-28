const { User } = require("../models");
const Token = require("../utils/Token");
const checkToken = (res, req, next) => {
  const token = res.headers.authorization;

  if (!token || token == null) {
    return req.status(412).json({ message: "No token" });
  }
  const decoded = new Token({ token }).decoded();

  if (decoded) {
    res.body._id = decoded._id;
    next();
  } else {
    return req.status(401).json({ message: "Token expired" });
  }
};
const checkUserRole = async (res, req, next) => {
  const { _id } = res.body;
  try {
    const user = await User.findOne({ _id });
    if (user && user.role === "ADMIN") {
      return next();
    }
    return req.status(400).json({ message: "You are not an admin" });
  } catch (error) {
    return req.status(500);
  }
};

module.exports = { checkToken, checkUserRole };
