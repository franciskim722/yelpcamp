var mongoose = require("mongoose");

//schema setup for mongo
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    author:{
        id: {
            type:mongoose.Schema.Types.ObjectId,
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});

//Campground schema
module.exports = mongoose.model("Campground",campgroundSchema);