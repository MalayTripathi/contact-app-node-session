var DB = require('../mongoconnect');

var verifyLogin = (req, res, next) => {
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
						res.send({ status: "Login Created Successfully!" })
					})
					.catch(function (err) {
						res.send({ status: "Could Not Create A Login For New User!" });
					})
			}
			else if (response.username == loginData.username && response.password == loginData.password)
			{	
				res.send({ status: "Login Successfull" });
			}
			else
			{
				res.send({ status: "Incorrect Login Credentials" });
			}	
		})
		.catch(function (err) {
			res.send({ status: err });
		});
}

module.exports = {
	verifyLogin
};