var DB = require('../mongoconnect');

var userlogin = require('./verifyLogin');

getDataFromDB = (req, res, next) => {
	DB.ConCollect.find({ admin: userlogin.currentUser.userName}).select()
		.then(function (response) {
			if (response)
			{	
				res.json({ status: "Success", result: response });
			}
		})
		.catch(function (err){
			console.log(err);
		})
}

module.exports = {
	getDataFromDB
}