const fetch = require("node-fetch");
const qs = require("qs");
const { getConfig } = require("../framework/config");
const { HEADER } = require("../constants");
const configObject = getConfig();

const loginUrl = `https://login.microsoftonline.com/${
  configObject.tenent_id
}/oauth2/v2.0/token`;

const tokenRefreshUrl = `https://login.microsoftonline.com/${
  configObject.tenent_id
}/oauth2/v2.0/token`;

exports.authenticate = async function(username, password) {
  const body = {
    client_id: configObject.client_id,
    client_secret: configObject.client_secret,
    grant_type: "password",
    username: username,
    password: password,
    scope: "user.read offline_access"
  };

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: HEADER,
      body: qs.stringify(body)
    });

    return response.json();
  } catch (error) {
    throw new Error(`authentication error $${JSON.stringify(error)}`);
  }
};

exports.refreshByToken = async function(refreshToken) {
  const body = {
    client_id: configObject.client_id,
    client_secret: configObject.client_secret,
    grant_type: "refresh_token",
    refresh_token: refreshToken
  };

  try {
    const response = await fetch(tokenRefreshUrl, {
      method: "POST",
      headers: HEADER,
      body: qs.stringify(body)
    });

    return response.json();
  } catch (error) {
    throw new Error(
      `authentication by refresh token error $${JSON.stringify(error)}`
    );
  }
};
