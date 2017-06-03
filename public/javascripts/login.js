function userSignUp() {
	var username = document.getElementById("suemail").value;
	var password = document.getElementById("supassword").value;
	if (username && password) {
		axios.post('/api/usersignup', {
			username: username,
			password: password
		})
			.then((response) => {
				if (response.data.success) {
					alert(response.data.status);
					location.replace('/');
				}
				else {
					alert(response.data.status);
				}
			})
	}
	else
	{
		alert('Email & Password Cannot Be Null.');
	}	
}

function loginAdmin() {
	var username = document.getElementById("regemail").value;
	var password = document.getElementById("password").value;

	if (username && password) {
		axios.post('/api/verifylogin', {
			username: username,
			password: password
		})
			.then((response) => {
				if (response.data.success) {
					location.replace('/userdetails');
				}
				else {
					alert(response.data.status);
				}
			})
	}
	else {
		alert('Email & Password Cannot Be Null.');
	}
}