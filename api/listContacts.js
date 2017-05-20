var DB = require('../mongoconnect');

function getDataFromDB(req, res, next) {
	DB.ConCollect.find().select()
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