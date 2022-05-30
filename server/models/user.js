const { Schema, model } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: String },
  // dateReqistration: { type: String, required: true },
  // dateLostLogin: { type: String, required: true },
});

module.exports = model("User", User);
