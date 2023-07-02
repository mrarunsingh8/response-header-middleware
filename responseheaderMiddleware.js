const uuid = require("uuid");

function responseheaderMiddleware(req, res, next){
	res.setHeader("x-airtribe-csrf", uuid.v4());
	next();
}

module.exports = responseheaderMiddleware;