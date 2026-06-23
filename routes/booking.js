const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");


// CREATE BOOKING
router.post("/:id", isLoggedIn, async (req, res) => {

    const listing = await Listing.findById(req.params.id);

    let checkIn = new Date(req.body.checkIn);
    let checkOut = new Date(req.body.checkOut);

    let nights =
        (checkOut - checkIn) / (1000 * 60 * 60 * 24);

    let totalPrice = nights * listing.price;

    await Booking.create({
        listing: listing._id,
        user: req.user._id,
        checkIn,
        checkOut,
        guests: req.body.guests,
        totalPrice
    });

    req.flash("success", "Booking Confirmed!");

    res.redirect("/bookings/mybookings");
});


// 👇 ISKE NICHE YE PASTE KARNA HAI
router.get("/mybookings", isLoggedIn, async (req, res) => {

    const bookings = await Booking.find({
        user: req.user._id
    }).populate("listing");

    res.render("bookings/index.ejs", { bookings });

});

router.delete("/:id", isLoggedIn, async (req, res) => {

    await Booking.findByIdAndDelete(req.params.id);

    req.flash("success", "Booking cancelled successfully");

    res.redirect("/bookings/mybookings");

});

module.exports = router;