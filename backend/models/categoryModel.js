const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryId: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
