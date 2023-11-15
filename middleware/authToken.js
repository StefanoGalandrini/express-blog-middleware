const express = require('express');
const jwt = require('jsonwebtoken');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports = function (req, res, next)
{
	const authHeader = req.headers.authorization;

	if (!authHeader)
	{
		return res.status(401).send({ error: 'No token provided' });
	}

	const receivedToken = authHeader.split(' ')[1];

	const jwtPayload = jwt.verify(receivedToken, process.env.JWT_SECRET);

	req["user"] = jwtPayload;

	next();

};
