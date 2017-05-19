var express = require('express');
var router = express.Router();

var datasave = require('../api/mongodata');

router.post('/submit', datasave.saveDataToDB);

module.exports = router;
