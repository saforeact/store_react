const { User } = require("../models");

class UserController {
  async getUser(req, res) {
    const user = await User.findOne({ _id: req.body._id });
    const { password, _id, ...resUser } = user._doc;
    res.status(200).json({ user: resUser });
  }
  async editProfileUser(req, res) {
    const body = req.body;

    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { ...body }
    );
    console.log(`user`, user);
  }
}

module.exports = new UserController();
