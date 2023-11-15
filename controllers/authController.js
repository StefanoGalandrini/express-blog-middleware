const generateJWT = require("../utilities/generateJWT");
const fs = require("fs");
const path = require("path");

// function for user login
/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function login(req, res)
{
	// get user data from request body
	const { username, password } = req.body;

	// check if username and password exist
	if (!username || !password)
	{
		res.status(400).send("Please provide username and password");
		return;
	}

	// read data from users json file
	const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../db/users.json")));

	// find user by username and password
	const user = users.find(u => u.username === username && u.password === password);

	if (!user)
	{
		res.status(401).send("Username or password incorrect");
		return;
	}

	// generate JWT token
	const token = generateJWT(user);

	// send response
	res.json({ token });
}

module.exports = {
	login
};
