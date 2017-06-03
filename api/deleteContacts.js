//Requiring the contents of the modules exported from mongoconnect.js into a variable called DB
var DB = require('../mongoconnect');

removeDataFromDB = (req, res, next) => {
	DB.ConCollect.findOneAndRemove( {email: req.body.emailid })
		.then(function (response) {
			if (response) {
				res.json({ status: "Success" });
			}
			else {
				console.log('Could Not Remove Data');
			}
		})
		.catch(function (err) {
			console.log("Error", err);
		});
}

module.exports = {
	removeDataFromDB
}