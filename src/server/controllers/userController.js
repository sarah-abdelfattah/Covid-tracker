const axios = require('axios');
var request = require("request");

exports.getUser = async function (req, res) {
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

    // var options = {
    //   method: 'POST',
    //   url: 'https://dev-9r9paw-9.us.auth0.com/oauth/token',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({
    //     client_id: req.body.client_id,
    //     client_secret: "2FHJSyCyCozcWy1cx36NOe3w1_DjaIVOZQl6JODZpyTxuqAT9p6aZo1ODJHFxaqj",
    //     audience: "https://dev-9r9paw-9.us.auth0.com/api/v2/",
    //     grant_type: "client_credentials"
    //   })
    // };

    // request(options, function (error, response, body) {
    //   console.log("🚀 ~ file: userController.js ~ line 30 ~ response", response);
    //   if (error) throw new Error(error);

    //   console.log(body);
    // });






    // const accessToken = req.headers.authorization.split(' ')[1]
    // var options = {
    //   method: 'POST',
    //   url: `${ process.env.VITE_AUTH0_ISSUER }api/v2/users`,
    //   headers: {
    //     authorization: `Bearer ${ accessToken } `,
    //     'content-type': 'application/json'
    //   },
    //   data: req.body.data
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    // const response = await axios.post(`${ process.env.VITE_AUTH0_ISSUER } api / v2 / users`, options)

    return res.send({ message: 'response.data' })
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}