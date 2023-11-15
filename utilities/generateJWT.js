const jwt = require('jsonwebtoken');

// fetch user data to be used in payload of JWT token
module.exports = function (user)
{
	const payload = {
		id: user.id,
		username: user.username,
		email: user.email,
	};

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, process.env.JWT_SECRET, options);
};
