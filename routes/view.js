var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index.hbs', { title: 'CONTACTS APP', pageTitle: "WELCOME TO CONTACTS APP", copyright: 'Designed By Malay Tripathi' });
});

router.get('/userdetails', function (req, res, next) {
	res.render('afterlogin.hbs', { title: 'CONTACTS APP', pageTitle: "WELCOME USER"});
});

module.exports = router;
