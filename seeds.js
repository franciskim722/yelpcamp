var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Shoulder meatball corned beef cow. Sirloin jerky pork loin pancetta, salami pastrami meatball capicola shank. Ribeye tail filet mignon leberkas shank hamburger chicken boudin pork belly bresaola tenderloin. Ground round drumstick meatloaf turducken ribeye short ribs. Corned beef pancetta kevin, pork frankfurter turducken ham hock cupim meatloaf shankle filet mignon."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Shoulder meatball corned beef cow. Sirloin jerky pork loin pancetta, salami pastrami meatball capicola shank. Ribeye tail filet mignon leberkas shank hamburger chicken boudin pork belly bresaola tenderloin. Ground round drumstick meatloaf turducken ribeye short ribs. Corned beef pancetta kevin, pork frankfurter turducken ham hock cupim meatloaf shankle filet mignon."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Shoulder meatball corned beef cow. Sirloin jerky pork loin pancetta, salami pastrami meatball capicola shank. Ribeye tail filet mignon leberkas shank hamburger chicken boudin pork belly bresaola tenderloin. Ground round drumstick meatloaf turducken ribeye short ribs. Corned beef pancetta kevin, pork frankfurter turducken ham hock cupim meatloaf shankle filet mignon."
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({},function(err){
        // if(err){
        //     console.log(err);
        // } 
        // console.log("removed campgrounds");
        // // add a few campgrounds. seed represents each object 
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is awesome, but want WiFI",
        //                     author: "Bill"
        //                 }, function(err,comment){
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;
