var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// Index Routes. Show all routes.
router.get("/", function(req, res){
    //{nameofdata: actualdata}
    // res.render("campgrounds", {campgrounds:campgrounds});
    
    //get all campgrounds from database then render
    
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
    } else { 
        res.render("campgrounds/index",{campgrounds:allCampgrounds});
           }
    });
});

//post route Create route

router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from form and add data to campgrounds array
    
    //Save data from form into a variable
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    //save data into new object
    var newCampground = {name: name, image: image, description: desc, author: author};
    //push newCampground object into global campgrounds array
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});    

// shows data in form. NEW route
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW ROUTE - info about one campground
router.get("/:id", function(req, res) {
    //Find Campground by ID, then populating by comments ID, then exec executes query below
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           console.log(foundCampground);
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});

// UPDATE ROUTE
router.put("/:id",middleware.checkCampgroundOwnership, function(req,res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err,updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    //redirect back to show campground page
});

// EDIT ROUTE 
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req,res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit",{campground: foundCampground});
    });
});

// DESTORY/DELETE ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;