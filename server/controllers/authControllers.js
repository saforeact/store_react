const { User } = require("../models");
const Bcrypt = require("../utils/Bcrypt");

const Token = require("../utils/Token");

class AuthController {
  async registrationUser(req, res) {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(409).json({ message: "Such a user already exists" });
    }
    const hashPassword = await new Bcrypt({ password }).hash();

    const user = new User({
      email,
      password: hashPassword,
      role: "USER",
      photo: "img/avatar.png",
    });
    await user.save();
    const token = new Token({ _id: user._id }).create();
    return res
      .status(200)
      .json({ message: "The user was successfully created", token });
  }

  async authorizationUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No such user" });
    }
    const decodedPass = await new Bcrypt({
      password,
      hashPassword: user.password,
    }).decoded();

    if (!decodedPass) {
      return res.status(400).json({ message: "No such user" });
    }
    const token = new Token({ _id: user._id }).create();
    return res.status(200).json({ token });
  }
}

module.exports = new AuthController();
