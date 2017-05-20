function submitData() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
	 var phone = document.getElementById("phone");
	
	 axios.post('/api/addcontact', {
		 name: name.value,
		 email: email.value,
		 phone: phone.value
	 })
	.then((res) => {
		if (res.data.Status == 'Success') {
			displayContacts();
		}
		else {
			console.log("Failed To Add Contact");
			displayContacts();
		}
	})
	.catch(function (err) {
		console.log("Error", err);
	});
}

function displayContacts() {

	axios.post('/api/listcontact')
		.then(function (response) {
			for (var i = 0; i < response.data.result.length; i++) {
				var tableid = document.getElementById("fetchdata");
				var rowid = tableid.insertRow(i);
				var namecol = rowid.insertCell(0);
				var mailcol = rowid.insertCell(1);
				var phonecol = rowid.insertCell(2);
				namecol.contentEditable = true;
				mailcol.contentEditable = true;
				phonecol.contentEditable = true;
				namecol.innerHTML = response.data.result[i].name;
				mailcol.innerHTML = response.data.result[i].email;
				phonecol.innerHTML = response.data.result[i].number;
			}
			debugger;
		})
		.catch(function (err) {
			console.log("Error", err);
		})
}