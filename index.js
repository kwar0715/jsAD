const authentication = require("./api/authentication");

exports.authenticate = authentication.authenticate;
exports.refreshByToken = authentication.refreshByToken;
