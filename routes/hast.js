var express  = require('express');
var router   = express.Router();

var mongoose = require('mongoose');
//var Hast     = require('../models/hast.js');
var Models   = require('../models');

/* List: GET /hast listing. */
router.get('/family/get', function(req, res, next) {
	Models.Family.find(function(err, get) {
		if(err) return next(err);
		res.json(get);
	});
});

/* Create: POST /hast */
router.post('/family/post', function(req, res, next) {
  Models.Family.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Show by Id: GET /hast/id
router.get('/family/get/:id', function(req, res, next) {
  Models.Family.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Show by Id: GET /hast/id
router.get('/familymemberbyfamilyid/get/:id', function(req, res, next) {
  Models.Family.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    Models.FamilyMember.find({ family_id: post._id}, {},
      function(err, familymembers){
        if(err) {throw err;}
        res.json(familymembers);
      });
    //res.json(post);
  });
});




/* Update: PUT /hast/:id */
router.put('/family/update/:id', function(req, res, next) {
  Models.Family.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /hast/:id */
router.delete('/family/delete/:id', function(req, res, next) {
  Models.Family.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//===============================================================================

/* List: GET /hast listing. */
router.get('/familymember/get', function(req, res, next) {
  Models.FamilyMember.find(function(err, get) {
    if(err) return next(err);
    res.json(get);
  });
});

/* Create: POST /hast */
router.post('/familymember/post', function(req, res, next) {
  Models.FamilyMember.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Show by Id: GET /hast/id
router.get('/familymember/get/:id', function(req, res, next) {
  Models.FamilyMember.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update: PUT /hast/:id */
router.put('/familymember/update/:id', function(req, res, next) {
  Models.FamilyMember.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /hast/:id */
router.delete('/familymember/delete/:id', function(req, res, next) {
  Models.FamilyMember.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
/*
router.post('/post', function(req, res) {
  var users;
  users = new Hast({
    familymembers: req.body.familymembers,      
    user: req.body.user,
    healthData: req.body.healthData
  });
  users.save(function(err){
    if(!err) {
      res.json(post);
    } else {
      return err;
    }
  });
  return res.send(users);
});
*/


/* Show by Id: GET /hast/id 
router.get('/:id', function(req, res, next) {
  Hast.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// List: GET /hast listing.
router.get('/get/', function(req, res, next) {
	Hast.find(function(err, get) {
		if(err) return next(err);
		res.json(get);
	});
});
*/

