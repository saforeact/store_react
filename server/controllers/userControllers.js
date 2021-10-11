const { User } = require("../models");
const fs = require("fs");
const Token = require("../utils/Token");

class UserController {
  async getUser(req, res) {
    const user = await User.findOne({ _id: req.body._id });

    const { password, _id, ...resUser } = user._doc;
    const token = new Token({ _id: user._id });
    res.cookie("token", token.create(), {
      httpOnly: true,
      expires: token.expiryCookies,
    });

    return res.status(200).json({ user: resUser });
  }
  async editProfileUser(req, res) {
    const body = req.body;
    try {
      await User.findOneAndUpdate({ _id: req.body._id }, { ...body });
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async editProfilePhotoUser(req, res) {
    const { _id } = req.body;
    const { photo } = req.files;
    const UPLOAD_DIR = "uploads";
    try {
      const user = await User.findOne({ _id });
      fs.stat("./" + UPLOAD_DIR, function (err) {
        if (err) {
          fs.mkdirSync("./" + UPLOAD_DIR);
        }
        if (user.photo) {
          fs.stat(user.photo, function (err, stats) {
            if (!err) {
              fs.unlinkSync("./" + user.photo, () => {});
            }
          });
        }
      });

      const TYPE_PHOTO = photo.mimetype.slice(photo.mimetype.indexOf("/") + 1);
      const PATH_TO_PHOTO = `${UPLOAD_DIR}/${_id}${
        Math.random() * 100
      }.${TYPE_PHOTO}`;

      photo.mv(PATH_TO_PHOTO);
      await User.findOneAndUpdate({ _id }, { photo: PATH_TO_PHOTO });

      return res.status(200).json({ message: "Success" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  async logOut(req, res) {
    try {
      res.cookie("token", "", { maxAge: -1 });
      return res.status(200).json({});
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new UserController();
