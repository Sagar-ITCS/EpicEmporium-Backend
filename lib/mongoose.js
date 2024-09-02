// mongooseConnection.js

const mongoose = require("mongoose");
async function connectDB() {
  try {
    // Replace the URI with your MongoDB connection string
    const uri = "mongodb://0.0.0.0:27017/test";

    await mongoose.connect(uri);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
}
module.exports = connectDB;
