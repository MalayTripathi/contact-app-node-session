var mongoose = require('mongoose'); //Require Mongoose
mongoose.Promise = require('bluebird');		//To use Then and Catch with MongoDB we need Bluebird
mongoose.connect('mongodb://localhost:27017/ContactApp', (error, response) => {
	if (response)
	{
		return console.log('Unable To Connect To MongoDB Servers');
	}
	console.log('Connected To MongoDB');
});

//Defining a new Schema
var conschema = new mongoose.Schema({
	admin: String,
    name: String,
    email: String,
    number: Number
});

var loginschema = new mongoose.Schema({
	username: String,
	password: String
});

//Modelling the above created Schema to a collection named 'Contacts' and storing it in a varible called
//ConCollect
var ConCollect = mongoose.model('ContactsLogin', conschema);
var LogCollect = mongoose.model('userlogin', loginschema);

//Exporting the object which contains the data to connect to the collection Contacts
module.exports = {
	ConCollect,
	LogCollect
};