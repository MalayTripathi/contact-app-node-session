var DB = require('../mongoconnect');

getDataFromDB = (req, res, next) => {
	DB.ConCollect.find({ admin: req.session.username}).select()
		.then(function (response) {
			if (response)
			{	
				res.json({success: true, status: "Success", result: response });
			}
		})
		.catch(function (err){
			res.json({ success: false, status: "Unexpected Error", result: err });
		})
}

module.exports = {
	getDataFromDB
}