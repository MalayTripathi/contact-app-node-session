//Requiring the contents of the modules exported from mongoconnect.js into a variable called DB
var DB = require('../mongoconnect');

saveDataToDB = (req, res, next) => {
	//Collecting the response into a new JSON object conData. The properties here should be of the same name
	//as the properties names we used while defining the schema into mongoconnect.js else the value where the 
	//proprty mismatches will not be pushed into the DB.
	var conData = {
		name: req.body.name,
		email: req.body.email,
		number: req.body.phone
	};
	//Here we refer to the Schema by calling the DB.ConCollect exported by mongoconnect.js
	DB.ConCollect.findOne({ email: conData.email })
		.then((response)=> {
			if (!response) {
				var contact = new DB.ConCollect(conData);
				contact.save()
					.then(function (response){
					res.send({'Status': "Success"})
					})
					.catch(function (err) {
						res.send({ 'Status': 'Failure', Error: err });
				})
			}
			else {
				res.send({ 'Status': "Email Already Exists" });
			}
		})
	.catch(function (err) {
		res.send({ 'Status': err });
		});
}

module.exports={
    saveDataToDB
}