//Requiring the contents of the modules exported from mongoconnect.js into a variable called DB
var DB = require('../mongoconnect');

changeDataInDB = (req, res, next) => {
	var conData = {
		name: req.body.name,
		email: req.body.email,
		number: req.body.phone
	};
	var oldemail = req.body.oldemail;
	//Here we refer to the Schema by calling the DB.ConCollect exported by mongoconnect.js
	DB.ConCollect.findOneAndUpdate({ email: oldemail },conData)
		.then((response) => {
			if (response) {
				DB.ConCollect.update()
					.then(function (response) {
						res.send({ 'Status': "Success" })
					})
					.catch(function (err) {
						res.send({ 'Status': err });
					})
			}
			else {
				res.send({ 'Status': "Email Not Found" });
			}
		})
		.catch(function (err) {
			res.send({ 'Status': err });
		});
}

module.exports = {
	changeDataInDB
}