const mongoose = require("mongoose");
const Listing = require("../models/listing");
const getCoordinates = require("../utlis/geocoding");

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

async function updateListings() {
  const listings = await Listing.find({});

  for (let listing of listings) {
    if (!listing.geometry || !listing.geometry.coordinates?.length) {
      const geometry = await getCoordinates(listing.location);

      if (geometry) {
        listing.geometry = geometry;
        await listing.save();
        console.log(`Updated: ${listing.title}`);
      }
    }
  }

  console.log("All old listings updated");
  mongoose.connection.close();
}

updateListings();