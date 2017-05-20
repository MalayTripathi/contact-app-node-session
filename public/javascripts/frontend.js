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
	var tab = document.getElementById("fetchdata")
	tab.innerHTML = "";
	axios.post('/api/listcontact')
		.then(function (response) {
			var result = response.data.result;
			for (var i = 0; i < result.length; i++) {
				var tableid = document.getElementById("fetchdata");
				var rowid = tableid.insertRow(i);
				var sno = rowid.insertCell(0)
				var namecol = rowid.insertCell(1);
				var mailcol = rowid.insertCell(2);
				var phonecol = rowid.insertCell(3);
				var editbut = rowid.insertCell(4);
				var delbut = rowid.insertCell(5);
				sno.innerHTML = i+1;
				namecol.innerHTML = result[i].name;
				mailcol.innerHTML = result[i].email;
				phonecol.innerHTML = result[i].number;
				//Use Single Quotes to Send email ID as it will error Uncaught Syntax Error. DoubleQuotes will not work
				editbut.innerHTML = `<button type="submit" onclick="editData('${i}')">Edit Contact</button>`;
				delbut.innerHTML = `<button type="submit" onclick="deleteData('${result[i].email}')">Delete Contact</button>`;
			}
		})
		.catch(function (err) {
			console.log("Error", err);
		})
}

function editData(id) {
	for (var i = 1; i < 4; i++)
	{
		var doc = document.getElementById("fetchdata").rows[id].cells[i];
		doc.contentEditable = true;
	}	
	var editbutton = document.getElementById("fetchdata").rows[id].cells[4];
	editbutton.innerHTML = `<button type="submit" onclick=changeData()">Submit</button>`;
}

function deleteData(emailid)
{
	axios.post('/api/deletecontact', {
		emailid: emailid
	})
	.then(function (response) {
		if (response.data.status == 'Success')
		{
			displayContacts();
		}	
	})
}