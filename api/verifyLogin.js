var DB = require('../mongoconnect');

var verifyLogin = (req, res, next) => {
	var loginData = {
		username: req.body.username,
		password: req.body.password
	}
	DB.LogCollect.findOne({ username: loginData.username })
		.then((response) => {
			if (!response) {
				res.json({ success: false, status: 'Authentication Failed!' });
			}
			else {
				if (response.password != loginData.password) {
					res.json({ success: false, status: 'Wrong Password Entered. Authentication Failed!' });
				}
				else {
					req.session = loginData;
					req.session.isLogged = true;
					res.json({ success: true, status: 'Login Successfull', isLogged: req.session.isLogged })
				}
			}
		})
		.catch((err) => {
			res.json({ success: false, status: 'Unexpected Error Occured' });
		});
}	

module.exports = {
	verifyLogin,
};