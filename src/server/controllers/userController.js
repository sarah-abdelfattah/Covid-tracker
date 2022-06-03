const axios = require('axios');
const request = require("request");
const { getTokenMNGT, getProfile, updateProfile } = require("../middleware/middleware.js")

exports.getUser = async function (req, res) {
  //access token to 'https://task-server.com' (mn el frontend 3ady)

  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    const response = await axios.get(`${process.env.VITE_AUTH0_ISSUER}userinfo`, {
      headers:
        { authorization: `Bearer ${accessToken}` }
    })

    // let token = await getTokenMNGT()
    // let body = await getProfile(token.data, 'auth0|6286076853955b006708ccfd')

    return res.send(response.data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}

exports.updateUser = async function (req, res) {
  try {
    let token = await getTokenMNGT()
    let result = await updateProfile(token.data, req.body.id, req.body.data)

    return res.send({ message: 'response.data' })
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}