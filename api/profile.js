const fetch = require("node-fetch");

const getProfileInfoUrl = "https://graph.microsoft.com/v1.0/me/";

exports.getProfileInfo = async function(authentication) {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authentication.access_token}`,
    "Cache-Control": "no-cache"
  };
  try {
    const response = await fetch(getProfileInfoUrl, {
      method: "GET",
      headers: header
    });

    return response.json();
  } catch (error) {
    throw new Error(`getProfileInfo error $${JSON.stringify(error)}`);
  }
};
