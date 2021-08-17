const mongoose = require("mongoose");

module.exports = {
  userSchema: new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, require: true },
    surname: { type: String, require: true },
    role: { type: String, require: true },
  }),
  basketSchema: new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, require: true },
  }),
  basketDeviceSchema: new mongoose.Schema({
    deviceId: { type: mongoose.Types.ObjectId, require: true },
    basketId: { type: mongoose.Types.ObjectId, require: true },
  }),

  typeSchema: new mongoose.Schema({
    name: { type: mongoose.Types.ObjectId, require: true },
  }),

  brandSchema: new mongoose.Schema({
    name: { type: mongoose.Types.ObjectId, require: true },
  }),
  ratingSchema: new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, require: true },
    deviceId: { type: mongoose.Types.ObjectId, require: true },
    rate: Number,
  }),
  deviceSchema: new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    rating: { type: Number, require: true },
    img: { type: String, require: true },
    typeId: { type: mongoose.Types.ObjectId, require: true },
    brandId: { type: mongoose.Types.ObjectId, require: true },
  }),
};
