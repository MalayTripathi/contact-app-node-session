var express = require('express');
var router = express.Router();

var addContact = require('../api/addContacts');
var listContact = require('../api/listContacts');

router.post('/addcontact', addContact.saveDataToDB);
router.post('/listcontact', listContact.getDataFromDB);

module.exports = router;
