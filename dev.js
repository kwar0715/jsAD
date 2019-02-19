// read json
const jsAD = require("./index");

const connection = jsAD.createConnection({
  client_id: process.env.AD_CLIENT_ID,
  client_secret: process.env.AD_CLIENT_SECRET,
  tenent_id: process.env.AD_TENENT_ID
});

let auth;

(async () => {
  // authenticate
  try {
    auth = await connection.authenticate(
      process.env.NETWORK_EMAIL,
      process.env.NETWORK_PASS
    );
    console.log(`Authentication ---- ${JSON.stringify(auth)}`);
  } catch (error) {
    console.log(`Authentication Error ---- ${JSON.stringify(error)}`);
  }
  // reauth by token
  try {
    const reauth = await connection.revokeToken(auth);
    console.log(`Re Auth By Token ---- ${JSON.stringify(reauth)}`);
  } catch (error) {
    console.log(`Re Auth By Token Error ---- ${JSON.stringify(error)}`);
  }

  // get profile info
  try {
    const profile = await connection.getProfile(auth);
    console.log(`Profile ---- ${JSON.stringify(profile)}`);
  } catch (error) {
    console.log(`Profile Error ---- ${JSON.stringify(error)}`);
  }

  // get profile name
  try {
    const profile = await connection.getProfilePermissionName(auth);
    console.log(`Profile Name ---- ${JSON.stringify(profile)}`);
  } catch (error) {
    console.log(`Profile Name Error ---- ${JSON.stringify(error)}`);
  }
})();
