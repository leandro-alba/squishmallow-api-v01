const mongoose = require("mongoose");

const SquishmallowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type:{//squishmallow,hug-mees,stackables, ornaments
    type: String,
    required: true
  },
  brand:{//pig,cow,cat...
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
  size:{ 
    type: String,
    required: true,
  },
  collectorNumber:{ // had to change to account for special edition collectors numbers with letters in them
    type: String,
    required: false,
  },
  squad:{ 
    type: String,
    required: false,
  },
  releaseDate:{ 
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: true,
  },
  appearance:{
    type: String,
    require: false,
  },
  thankyous: {//this will be for thanking outside squish fans for adding to the database, its will be their reddit username or whatever username they want. Change name to addedBy: & have a seperate, specialThankYouTo: 'ashey @ jasdhka' for providing the data for this squish
    type: String,
    require: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seenOn: [{
    type: String,
    required: false
  }],
  variants: [{
    otherName: {type: String, required: false},
    img: {type: String, required: false},
    notableChanges: {type: String, required: false},
    collectionSquad: {type: String, required: false},
  }]
});

module.exports = mongoose.model("Squishmallow", SquishmallowSchema);//mongo will name my collection squishmallows, by default, saving me time by not having to add a collection name 
