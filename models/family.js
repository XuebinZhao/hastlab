var mongoose = require('mongoose');
//var ObjectId = mongoose.Schema.ObjectId;

var FamilySchema = new mongoose.Schema({
    //familyId:      { type: ObjectId },
    familyname:    { type: String },
    //familymembers: [familyMembers],
    updated_at:    { type: Date, 'default': Date.now }
    });

module.exports = mongoose.model('Family', FamilySchema);