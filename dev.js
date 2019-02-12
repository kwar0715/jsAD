const { getConfig } = require("./framework/config");
// read json
const { authenticate, refreshByToken, getProfileInfo } = require("./index");

console.log(JSON.stringify(getConfig()));

(async () => {
  // authenticate

  try {
    const auth = await authenticate(
      process.env.NETWORK_EMAIL,
      process.env.NETWORK_PASS
    );
    console.log(`Authentication ---- ${JSON.stringify(auth)}`);
  } catch (error) {
    console.log(`Authentication Error ---- ${JSON.stringify(error)}`);
  }

  // reauth by token
  try {
    const auth = await authenticate(
      process.env.NETWORK_EMAIL,
      process.env.NETWORK_PASS
    );

    const reauth = await refreshByToken(auth.refresh_token);
    console.log(`Re Auth By Token ---- ${JSON.stringify(reauth)}`);
  } catch (error) {
    console.log(`Re Auth By Token Error ---- ${JSON.stringify(error)}`);
  }

  // get profile info
  try {
    const auth = await authenticate(
      process.env.NETWORK_EMAIL,
      process.env.NETWORK_PASS
    );

    const profile = await getProfileInfo(auth);
    console.log(`Profile ---- ${JSON.stringify(profile)}`);
  } catch (error) {
    console.log(`Profile Error ---- ${JSON.stringify(error)}`);
  }
})();
