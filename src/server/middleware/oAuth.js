var axios = require("axios");

const tokenEndpoint = `${process.env.VITE_AUTH0_ISSUER}oauth/token`;
oAuth = (req, res, next) => {
  try {
    var code = req.query.code;
    console.log("🚀 ~ file: oAuth.js ~ line 6 ~ code", code);

    if (!code) {
      res.status(401).send("Missing authorization code");
    }

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", process.env.VITE_AUTH0_CLIENT_ID);
    params.append("client_secret", process.env.VITE_AUTH0_CLIENT_SECRET)
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/user");

    axios.post(tokenEndpoint, params)
      .then(response => {
        req.oauth = response.data;
        next();
      })
      .catch(err => {
        console.log(err);
        res.status(403).json(`error: ${err.message}`);
      })
  } catch (error) {
    console.log("🚀 ~ file: oAuth.js ~ line 30 ~ error", error);
  }
}

module.exports = oAuth;