const express = require("express");

const router = express.Router();
const Product = require("../models/product.js");

// Define the /api/add-product endpoint
router.post("/add-product", (req, res) => {
  let product = req.body;

  // check if there are multiple products
  if (Array.isArray(product)) {
    // check if there is slug in the product and if there is not, create one
    product = product.map((p) => {
      if (!p.slug) {
        p.slug = p.name.toLowerCase().replace(/ /g, "-");
      }
      return p;
    });

    // Insert multiple products
    Product.insertMany(product);
    return res.json({ products: product });
  }

  // Insert a single product
  product = new Product(product);
  product.save();

  // Here you would typically add the product to your database
  res.json({ product });
});

module.exports = router;
