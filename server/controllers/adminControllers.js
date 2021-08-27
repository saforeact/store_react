const { User } = require("../models");

class AdminController {
  async getAllUsers(req, res) {
    const roles = ["Admin", "User"];
    try {
      const users = await User.find({});
      const resUsers = users.map((u) => ({
        _id: u._id,
        email: u.email,
        role: u.role,
      }));
      res.status(200).json({ users: resUsers, roles });
    } catch (error) {
      res.status(400);
    }
  }
  async saveNewUsersList(req, res) {
    const { userList, _id } = req.body;
    try {
      userList.forEach(async (user) => {
        await User.findOneAndUpdate({ _id: user._id }, { role: user.role });
      });
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async deleteUsers(req, res) {
    const { removeList, _id } = req.body;
    try {
      for await (let itemID of removeList) {
        await User.findOneAndDelete({ _id: itemID });
      }

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new AdminController();
