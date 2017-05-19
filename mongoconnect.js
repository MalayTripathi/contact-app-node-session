var mongoose = require('mongoose'); //Require Mongoose
mongoose.Promise = require('bluebird');		//To use Then and Catch with MongoDB we need Bluebird
mongoose.connect('mongodb://localhost:27017/ContactApp', (err, db)=> {
    if(err){
       return console.log('We Are unable to connect to the Database Server');  //Return Added Just to end the function here if any error occours
    }
    console.log('Connected to MongoDB');
});

//Defining a new Schema
var conschema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number
});

//Modelling the above created Schema to a collection named 'Contacts' and storing it in a varible called
//ConCollect
var ConCollect = mongoose.model('Contacts', conschema);

//Exporting the object which contains the data to connect to the collection Contacts
module.exports = {
    ConCollect
};