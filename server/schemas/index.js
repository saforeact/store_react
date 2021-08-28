const mongoose = require("mongoose");

module.exports = {
  userSchema: new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String, require: true },
      surname: { type: String, require: true },
      role: { type: String, require: true },
      photo: { type: String },
    },
    {
      versionKey: false,
    }
  ),
  basketSchema: new mongoose.Schema(
    {
      userId: { type: mongoose.Types.ObjectId, require: true },
    },
    {
      versionKey: false,
    }
  ),
  basketDeviceSchema: new mongoose.Schema(
    {
      deviceId: { type: mongoose.Types.ObjectId, require: true },
      basketId: { type: mongoose.Types.ObjectId, require: true },
    },
    {
      versionKey: false,
    }
  ),

  typeSchema: new mongoose.Schema(
    {
      name: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),

  brandSchema: new mongoose.Schema(
    {
      name: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),
  ratingSchema: new mongoose.Schema(
    {
      userId: { type: mongoose.Types.ObjectId, require: true },
      deviceId: { type: mongoose.Types.ObjectId, require: true },
      rate: Number,
    },
    {
      versionKey: false,
    }
  ),
  deviceSchema: new mongoose.Schema(
    {
      name: { type: String, require: true },
      price: { type: Number, require: true },
      rating: { type: Number, require: true },
      img: { type: String, require: true },
      typeId: { type: mongoose.Types.ObjectId, require: true },
      brandId: { type: mongoose.Types.ObjectId, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
