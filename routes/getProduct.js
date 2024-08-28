const express = require("express");

const productModel = require("../models/product.js");
const router = express.Router();

router.get("/get-products", async (req, res) => {
  // const { name, price } = req.body;

  const products = await productModel.find();

  // Here you would typically add the product to your database
  res.json(products);
});

router.get("/get-product", async (req, res) => {
  const { slug } = req.query;

  const product = await productModel.findOne({ slug });

  // Here you would typically add the product to your database
  res.json(product);
});

module.exports = router;
