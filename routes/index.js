var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var rbxSchema = require('../models/rbxdata');



/* GET home page. */
router.post('/', function(req, res, next) {
  rbxSchema.findOne({name: req.body.name, token: req.body.token}, function(err, newData){
    if(err) {
      res.send(err);
    } else {
      res.send(newData.data);
    }
  });
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err.stack);
});

setTimeout(function () {
  console.log('This will still run.');
}, 500);

module.exports = router;
