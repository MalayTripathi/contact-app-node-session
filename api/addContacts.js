var Contacts = require('../mongoconnect');

saveDataToDB = (req, res, next) => {
   conData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
	}

	Contacts.findOne({ email: conData.email })
		.then((response) => {
			if (!response) {
				console.log('I Am in the API');
				var contact = new Contacts(conData);
				contact.save()
					.then(function (response) {
						console.log(response);
					res.send({'Status': "Value Added Successfully"})
					})
					.catch(function (err) {
						res.send({ 'Status': 'Failure', Error: err });
				})
			}
			else {
				res.send({ 'Status': "Email Already Exists" });
			}
		})
	.catch(function (err) {
		res.send({ 'Status': err });
		});
}

module.exports={
    saveDataToDB
}