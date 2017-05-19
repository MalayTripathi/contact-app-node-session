var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/ContactApp', (err, db)=> {
    if(err){
       return console.log('We Are unable to connect to the Database Server');  //Return Added Just to end the function here if any error occours
    }
    console.log('Connected to MongoDB');
});

var conschema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number
});

var Contacts = mongoose.model('Contacts', conschema);

module.exports = {
    Contacts
};