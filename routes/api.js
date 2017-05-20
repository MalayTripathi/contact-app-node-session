var express = require('express');
var router = express.Router();

var addContact = require('../api/addContacts');
var listContact = require('../api/listContacts');
var deleteContact = require('../api/deleteContacts');

router.post('/addcontact', addContact.saveDataToDB);
router.post('/listcontact', listContact.getDataFromDB);
router.post('/deletecontact', deleteContact.removeDataFromDB);

module.exports = router;
