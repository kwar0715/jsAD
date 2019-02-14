const { oauth } = require("../api/authentication.api");

exports.authenticate = async function(opts) {
  const body = {
    client_id: opts.client_id,
    client_secret: opts.client_secret,
    grant_type: "password",
    username: opts.username,
    password: opts.password,
    scope: "user.read offline_access"
  };
  return await oauth(body, opts.tenent_id);
};

exports.revokeToken = async function(opts) {
  const body = {
    client_id: opts.client_id,
    client_secret: opts.client_secret,
    grant_type: "refresh_token",
    refresh_token: opts.refresh_token
  };
  return await oauth(body, opts.tenent_id);
};
