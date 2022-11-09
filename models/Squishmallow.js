const mongoose = require("mongoose");

const SquishmallowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true
  },
  image: {
    type: String,
    require: false,
  },
  color: {
    type: String,
    required: true,
  },
//   likedBy:[{
//     type: mongoose.Schema.Types.ObjectId
//   }],
  size:{ 
    type: String,
    required: true,
  },
  collectorNumber:{ 
    type: Number,
    
  },
  squad:{ 
    type: String,
    
  },
  releaseDate:{ 
    type: String,
    
  },
  bio: {
    type: String,
    
  },
  appearance:{
    type: String,
  },
  thankyous: {//this will be for thanking outside squish fans for adding to the database, its will be their reddit username or whatever username they want 
    type: String,
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Squishmallow", SquishmallowSchema);//mongo will name my collection squishmallows, by default, saving me time by not having to add a collection name 
