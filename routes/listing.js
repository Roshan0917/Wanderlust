const express = require("express");
const router  = express.Router();

const wrapAsync = require("../utlis/wrapAsync.js");
const Listing = require("../models/listing.js");

const {isLoggedIn , isOwner , validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

router.get("/filter/:category", async (req, res) => {
    console.log("FILTER ROUTE HIT");

    let { category } = req.params;
    console.log(category);

    let allListings = await Listing.find({ category });

    console.log(allListings);

    res.render("listings/index.ejs", { allListings });
});

// SEARCH ROUTE
router.get("/search", async (req, res) => {

    let query = req.query.q;

    let allListings = await Listing.find({
        $or: [
            { title: { $regex: query, $options: "i" } },
            { location: { $regex: query, $options: "i" } },
            { country: { $regex: query, $options: "i" } }
        ]
    });

    res.render("listings/index.ejs", { allListings });
});

     // MY LISTING ROUTES
router.get("/mylistings", isLoggedIn, async (req, res) => {

    const listings = await Listing.find({
        owner: req.user._id
    });

    res.render("listings/mylistings.ejs", { listings });

});


// INDEX ROUTE
router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.array("listing[images]", 5),
    validateListing,
    wrapAsync(listingController.createListing)
);


// NEW ROUTE
router.get("/new",
    isLoggedIn,
    listingController.renderNewForm
);


// SHOW + UPDATE + DELETE
router.route("/:id")

.get(wrapAsync(listingController.showListing))

.put(
    isLoggedIn,
    isOwner,
    upload.array("listing[images]", 5),
    validateListing,
    wrapAsync(listingController.updateListing)
)

.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
);


// EDIT ROUTE
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListing)
);

module.exports = router;