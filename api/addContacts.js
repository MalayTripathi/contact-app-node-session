var Contacts = require('../mongoconnect');

saveDataToDB = (req, res, next) => {
    conData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }

    res.json({success: "Success"});
}

module.exports={
    saveDataToDB
}