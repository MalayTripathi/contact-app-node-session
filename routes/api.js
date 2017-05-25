var express = require('express');
var router = express.Router();

var loginVerify = require('../api/verifyLogin');
var addContact = require('../api/addContacts');
var listContact = require('../api/listContacts');
var editContact = require('../api/editContacts');
var deleteContact = require('../api/deleteContacts');
var userSignUp = require('../api/userSignUp');

router.post('/addcontact', addContact.saveDataToDB);
router.post('/listcontact', listContact.getDataFromDB);
router.post('/editcontact', editContact.changeDataInDB);
router.post('/deletecontact', deleteContact.removeDataFromDB);
router.post('/verifylogin', loginVerify.verifyLogin);
router.post('/usersignup', userSignUp.SaveSignUpData);

module.exports = router;
