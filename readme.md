# JSAD - Active Directory Library

Node js library for microsoft active directory

## installation

`npm install jsad`
`yarn add jsad`

## Configure

create jsad-config.json file in your root directory.

```
{
   "jsAD": {
    "client_id": <client id>,
    "client_secret": <client secret>,
    "tenent_id": <tenent id>
  }
}
```

## Usage

### Aauthentication

authenticate function can authenticate using username and password

```
const { authenticate } = require("jsad");

try {
  const auth = await authenticate(
  username,
  password
);
} catch (error) {
}
```

### Refresh token

AD client token will expires the 3600 s and this will reauthenticate by the refresh token given by authentication

```
const { authenticate, refreshByToken } = require("./index");

try {
    const auth = await authenticate(
    username,
    password
);
await refreshByToken(auth.refresh_token);
} catch (error) {
}
```

### Get profile information

get profile information of logged user.

```
const { authenticate ,getProfileInfo} = require("jsad");
try {
  const auth = await authenticate(
  username,
  password
  );
 const profile = await getProfileInfo(auth);
} catch (error) {
}
```

## Methods

1. authenticate(username,password): return auth response
2. refreshByToken(refreshToken: refresh token in auth object): auth response
3. getProfileInfo(auth: authentication object): return profile information object
