const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  first: String,
  last: String,
  street: String,
  city: String,
  email: String,
  picture: String,
});

const UserModel = mongoose.model("usuarios", UserSchema);

module.exports = UserModel;
