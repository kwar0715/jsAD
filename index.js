const authentication = require("./api/authentication");
const profile = require("./api/profile");

exports.authenticate = authentication.authenticate;
exports.refreshByToken = authentication.refreshByToken;
exports.getProfileInfo = profile.getProfileInfo;
