var express = require('express');
var router = express.Router();

var auth = (req, res, next) => {
	if (req.session.isLogged && req.session) {
		return next();
	}
	else
		return res.json({ success: false, status: 'Failed! Please login' });
};

var loginVerify = require('../api/verifyLogin');
var addContact = require('../api/addContacts');
var listContact = require('../api/listContacts');
var editContact = require('../api/editContacts');
var deleteContact = require('../api/deleteContacts');
var userSignUp = require('../api/userSignUp');
var logout = require('../api/logout');

router.post('/addcontact', addContact.saveDataToDB);
router.post('/listcontact', listContact.getDataFromDB);
router.post('/editcontact', editContact.changeDataInDB);
router.post('/deletecontact', deleteContact.removeDataFromDB);
router.post('/verifylogin', loginVerify.verifyLogin);
router.post('/usersignup', userSignUp.SaveSignUpData);
router.post('/logout', logout.userLogout);

module.exports = router;
