function loginAdmin() {
	var username = document.getElementById("regemail").value;
	var password = document.getElementById("password").value;

	axios.post('/api/verifylogin', {
		username: username,
		password: password
	})
		.then((response) => {
			if (response.data.status == "Login Successfull") {
				location.replace('/userdetails');
			}
			else {
				alert(response.data.status);
			}
		})
}