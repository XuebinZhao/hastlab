var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var FamilyMemberSchema = new mongoose.Schema({
    family_id:  { type: ObjectId },
    firstname:  { type:  String  },
    lastname:   { type:  String  },
    age:        { type:  Number  },
    gender:     { type:  String  },
    userid:     { type:  Number  },
    username:   { type:  String  },
    password:   { type:  String  },
    healthdata: [HealthDataSchema],
    updated_at: { type: Date, 'default': Date.now }
});

var HealthDataSchema = new mongoose.Schema({
    heartrate:  { type:  Number  },
    activity:   { type:  Number  },
    mood:       { type:  String  },
    updated_at: { type: Date, 'default': Date.now }
});

FamilyMemberSchema.virtual('family').set(function(family){
    this._family = family;
}).get(function() {
    return this._family;
});

module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);