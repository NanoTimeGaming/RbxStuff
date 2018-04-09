var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var rbxSchema = require('../models/rbxdata');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var data = {name: req.body.name, data: req.body.data, token: req.body.token}
  rbxSchema.create(data, function(err, newData) {
    if(err) {
      res.send(err);
    } else {
      res.send("Successfully created data!");
    }
  });
});

module.exports = router;
