var express = require('express');
var router = express.Router();

var addContact = require('../api/addContacts');

router.post('/addcontact', addContact.saveDataToDB);

module.exports = router;
