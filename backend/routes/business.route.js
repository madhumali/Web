const express = require('express');
const app = express();
const businessRoutes = express.Router();
//const mongoose = require('mongoose');

// Require Business model in our routes module
let Business = require('../models/usermanage');
//const Cake=require('../models/cake'); 
//let Business = mongoose.model('Business');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  console.log(business);
  // business.save()
  //   .then(business => {
  //     res.status(200).json({'business': 'business in added successfully'});
  //   })
  //   .catch(err => {
  //   res.status(400).send("unable to save to database");
  //   });
  business.save((err, item)=> {
    if(err) {
        res.json(err);
    }
    else {
        res.json({msg: 'Item has been added to the DB'});
    }
});
});

businessRoutes.route('/').get(function (req, res) {
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err,business) {
    
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    
  });
});

// Defined delete | remove s| destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
  Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});



module.exports = businessRoutes;