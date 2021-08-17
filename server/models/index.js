const mongoose = require("mongoose");
const {
  basketSchema,
  userSchema,
  basketDeviceSchema,
  typeSchema,
  brandSchema,
  ratingSchema,
  deviceSchema,
} = require("../schemas");

module.exports = {
  User: mongoose.model("User", userSchema),
  Basket: mongoose.model("Basket", basketSchema),
  BasketDevice: mongoose.model("BasketDevice", basketDeviceSchema),
  Type: mongoose.model("Type", typeSchema),
  Brand: mongoose.model("Brand", brandSchema),
  Rating: mongoose.model("Rating", ratingSchema),
  Device: mongoose.model("Device", deviceSchema),
};
