const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {

  await Listing.deleteMany({});
  await User.deleteMany({});

  const user = new User({
    email: "demo@gmail.com",
    username: "demoUser",
  });

  const registeredUser = await User.register(user, "123456");

  const updatedData = initData.data.map((obj) => ({
    ...obj,
    owner: registeredUser._id,
  }));

  await Listing.insertMany(updatedData);

  console.log("data was initialized");
  process.exit();
};

initDB();