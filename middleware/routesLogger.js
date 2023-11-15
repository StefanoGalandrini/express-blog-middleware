module.exports = function (req, res, next)
{
	//logging middleware
	console.log($`{req.method} ${req.url}`);
	next();
};
