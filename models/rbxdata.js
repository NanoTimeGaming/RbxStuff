var mongoose = require('mongoose');



var Schema = mongoose.Schema;



var SomeModelSchema = new Schema({
    name: String,
    data: Object,
    token: String
});

// Compile model from schema
module.exports = mongoose.model('SomeModel', SomeModelSchema );