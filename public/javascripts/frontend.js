function submitData(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    axios.post('/api/submit', {
        name: name.value,
        email: email.value,
        phone: phone.value
    }).
    then((res) => {
        console.log(res.status);
    });
}