const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  slug: String,
  price: Number,
  description: String,
  categories: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
