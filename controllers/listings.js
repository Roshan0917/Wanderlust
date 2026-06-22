const Listing = require("../models/listing");
const getCoordinates = require("../utlis/geocoding");

module.exports.index = async (req,res)=>{
  const  allListings = await Listing.find({});
      res.render("listings/index.ejs",{allListings});
    };

module.exports.renderNewForm = (req,res)=>{
        res.render("listings/new.ejs");
    };

module.exports.showListing = async(req,res)=>{
        let {id}=req.params;
      const  listing = await Listing.findById(id)
      .populate({path:"reviews",populate:{path:"author"},})
      .populate("owner");    //populate ka ude uss id ke data ko read krne ke liye hora hai 
      if(!listing){
        req.flash("error","Cannot find that listing");
        return res.redirect("/listings");
      }
      console.log(listing);
      res.render("listings/show.ejs",{listing});
    };  

  module.exports.createListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  newListing.owner = req.user._id;
console.log("LOCATION:", newListing.location);
const geometry = await getCoordinates(newListing.location);

if (!geometry) {
  req.flash("error", "Could not find coordinates for this location.");
  return res.redirect("/listings/new");
}

newListing.geometry = geometry;
await newListing.save();

  req.flash("success", "Successfully made a new listing");
  res.redirect("/listings");
};
    module.exports.editListing = async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
     if(!listing){
            req.flash("error","Cannot find that listing");
            return res.redirect("/listings");
          }
        let originalUrl = listing.image.url;
        originalUrl = originalUrl.replace("/upload", "/upload/h_300,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                w_250");
    res.render("listings/edit.ejs",{listing, originalUrl});
    };

    module.exports.updateListing = async (req,res)=>{
        let {id}=req.params;
         
      let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
      if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save(); 
    }
      req.flash("success","Successfully updated the listing");
        res.redirect(`/listings/${id}`);
    }; 

    module.exports.destroyListing = async(req,res)=>{
        let{id}=req.params;
         req.flash("success","Successfully deleted the listing");
       let DeletedLisitng = await Listing.findByIdAndDelete(id);
       console.log(DeletedLisitng);
       res.redirect("/listings")
    };