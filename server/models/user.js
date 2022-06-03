const { Schema, model } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userStatus: { type: String },
  dateOfRegistration: { type: String, required: true },
  dateOfLastLogin: { type: String, required: true },
  selected: { type: Boolean, required: true },
});

module.exports = model("User", User);
