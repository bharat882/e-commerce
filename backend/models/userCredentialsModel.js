const mongoose = require("mongoose");
const { Schema } = mongoose;

const userCredentialsSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true, unique: true },
});

const UserCredentials = mongoose.model(
  "UserCredentials",
  userCredentialsSchema
);

module.exports = UserCredentials;
