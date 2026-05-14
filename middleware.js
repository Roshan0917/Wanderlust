const Listing = require("./models/listing");
const ExpressError = require("./utlis/ExpressError.js");
const {listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review");



module.exports.isLoggedIn= (req,res,next) => {
      if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl; // Store the original URL in the session
        req.flash("error","You must be logged in to create a listing");
        return res.redirect("/login");
      }
      next();
    }

    module.exports.saveRedirectUrl = (req,res,next) => {
      if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;  // Make the redirect URL available in res.locals
      }
      next();
    }

    module.exports.isOwner = async (req,res,next) => { 
      let {id}=req.params;
         let listing = await Listing.findById(id);
          if(!listing.owner.equals(res.locals.currentUser._id)){
            req.flash("error","You're not the owner of this listing");
            return res.redirect(`/listings/${id}`); //return is used to stop the execution of the code after this line if the user is not the owner of the listing.
          }
          next();
    }

 module.exports.isReviewAuthor = async (req,res,next) => {
       let {id, reviewId}=req.params;
         let review = await Review.findById(reviewId);
          if(!review.author.equals(res.locals.currentUser._id)){
            req.flash("error","You're not the author of this review");
            return res.redirect(`/listings/${id}`); //return is used to stop the execution of the code after this line if the user is not the owner of the listing.
          }
          next();
    }

    module.exports.validateListing =(req,res,next)=>{
          let {error} = listingSchema.validate(req.body);
       if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errmsg);
       } else {
        next();
       }
    };

    module.exports.validateReview =(req,res,next)=>{
      let {error} = reviewSchema.validate(req.body);
   if(error){
    let errmsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errmsg);
   } else {
    next();
   }
};