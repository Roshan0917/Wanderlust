const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Review = require("../models/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to DB and then initialize data
main()
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {

    // Delete old data
    await Listing.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});

    // Create demo user
    const user = new User({
      email: "demo@gmail.com",
      username: "demoUser",
    });

    const registeredUser = await User.register(user, "123456");

    // Add owner to every listing
    const updatedData = initData.data.map((obj) => ({
      ...obj,
      owner: registeredUser._id,
    }));

    // Insert listings
    await Listing.insertMany(updatedData);

    console.log("Data was initialized successfully!");
    process.exit();

  } catch (err) {
    console.log("Initialization Error:", err);
  }
};