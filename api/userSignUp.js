var DB = require('../mongoconnect');

var SaveSignUpData = (req, res, next) => {
	var loginData = {
		username: req.body.username,
		password: req.body.password
	}
	DB.LogCollect.findOne({ username: loginData.username })
		.then((response) => {
			if (!response) {
				var logDetails = DB.LogCollect(loginData);
				logDetails.save()
					.then((response) => {
						res.send({ success:true, status: "Login Created Successfully!" })
					})
					.catch(function (err) {
						res.send({ success: false, status: "Could Not Sign Up Successfully!" });
					})
			}
			else {
				res.send({ success:false, status: "User Already Exists! Please Login." });
			}
		})
		.catch(function (err) {
			res.send({ success: false, status: err });
		});
}

module.exports = {
	SaveSignUpData
};