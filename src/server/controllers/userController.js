const axios = require('axios');
const { expressjwt } = require("express-jwt");
const JWT = require('jsonwebtoken');
const request = require("request");

exports.getUser = async function (req, res) {
  //access token to 'https://task-server.com' (mn el frontend 3ady)

  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    const response = await axios.get(`${process.env.VITE_AUTH0_ISSUER}userinfo`, {
      headers:
        { authorization: `Bearer ${accessToken}` }
    })
    return res.send(response.data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}

exports.updateUser = async function (req, res) {
  try {
    console.log("hereee")
    const accessToken = req.headers.authorization.split(' ')[1]
    const options = {
      method: 'POST',
      url: `https://${process.env.VITE_AUTH0_DOMAIN}/oauth/token`,
      headers: {
        'content-type': 'application/json'
      },
      body: `{"client_id": "${process.env.client_id}", "client_secret":"${process.env.client_secret}","audience": "https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/","grant_type":"client_credentials"}`
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("🚀 ~ file: userController.js ~ line 35 ~ body", JSON.parse(body));

      // next(JSON.parse(body).access_token);
    });


    return res.send({ message: 'response.data' })
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}