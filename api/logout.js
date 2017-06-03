var userLogout = (req, res, next) => {
	req.session.isLogged = false;
	req.session.destroy();
	res.json({ success: true, status: 'User Logged Out', isLogged: false });
}

module.exports = {
	userLogout
}