// app.js

const express = require("express");
const app = express();
const getProductsRoute = require("../routes/getProduct.js");
const addProductRoute = require("../routes/addProduct.js");
const connectDB = require("../lib/mongoose.js");
const cors = require("cors");
// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(cors());

app.use(express.json());

// Import routes

// Use the routes
app.use("/api", addProductRoute);
app.use("/api", getProductsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
