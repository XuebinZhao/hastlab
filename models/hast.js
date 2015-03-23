var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
/*
var HastSchema = new mongoose.Schema({
	firstname:      { type: String },
    middlename:     { type: String },
    lastname:       { type: String },
    gender:         { type: String },
    age:            { type: Number },
    weight:         { type: Number },
    height_inch:    { type: Number },
    height_feet:    { type: Number },
    activites:      { type: Number },
    heartrate:      { type: Number },
    relation:       { type: String },
    //gpslocation:    { type: Number },
    username:       { type: String },
    password:       { type: String },
  updated_at: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Hast', HastSchema);
*/
var HealthData = new mongoose.Schema({
    heartRate: { type: Number},
    activity:  { type: Number},
    mood:      { type: String}
});

var familyMembers = new mongoose.Schema({
    userID: { type: ObjectId },
    user:   [userSchema]
});

var userSchema = new mongoose.Schema({
    username:   { type: String, required: true },
    password:   { type: String, required: true },
    firstname:  { type: String, required: true },
    middlename: { type: String },
    lastname:   { type: String, required: true },
    gender:     { type: String },
    age:        { type: Number },
    weight:     { type: Number },
    relation:   { type: String },
    healthData: [HealthData]
});

var HastSchema = new mongoose.Schema({
    familyId:      { type: ObjectId },
    familymembers: [familyMembers],
    updated_at:    { type: Date, 'default': Date.now }
    });

module.exports = mongoose.model('Hast', HastSchema);