var express = require('express');
var router = express.Router();

var auth = function (req, res, next) {
	if (req.session.email && req.session.isLogged)
		return next();
	else
		return res.redirect('/');
};

/* GET Home Page.*/
router.get('/', function (req, res, next) {
		res.render('index.hbs', { title: 'CONTACTS APP', pageTitle: "WELCOME TO CONTACTS APP", copyright: 'Designed By Malay Tripathi' });
});

router.get('/userdetails', auth, function (req, res, next) {
	if (req.session.isLogged) {
		res.render('afterlogin.hbs', { title: 'CONTACTS APP', pageTitle: "WELCOME USER", session: req.session });
	}
});

module.exports = router;
