const Token = require("../utils/Token");
const checkToken = (res, req, next) => {
  const token = res.headers.authorization;
  if (!token) {
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
module.exports = { checkToken };
