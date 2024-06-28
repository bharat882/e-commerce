const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  sku: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  active: { type: Boolean, default: true },
  unitsInStock: { type: Number, required: true },
  categoryId: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
