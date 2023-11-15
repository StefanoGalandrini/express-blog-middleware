const express = require('express');
const fs = require("fs");
const path = require("path");

// routes definition
/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
function index(req, res)
{
	res.format({
		text: () =>
		{
			res.type("text").send("Benvenuto nel mio blog!");
		},
		html: () =>
		{
			let htmlIndex = fs.readFileSync(path.join(__dirname, "../html", "./home.html"), "utf-8");

			res.type("html").send(htmlIndex);
		},
		default: () =>
		{
			res.status(406).send("Not Acceptable");
		},
	});
}

module.exports = {
	index,
};
