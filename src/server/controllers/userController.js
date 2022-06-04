const axios = require('axios');
const { getProfile, updateProfile, getAllUsers } = require("../middleware/middleware.js")

exports.getUser = async function (req, res) {
  //access token to 'https://task-server.com' (mn el frontend 3ady)

  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    const response = await axios.get(`${process.env.VITE_AUTH0_ISSUER}userinfo`, {
      headers:
        { authorization: `Bearer ${accessToken}` }
    })

    let userData = await getProfile(response.data.sub)

    return res.send(userData)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}

exports.getAll = async function (req, res) {
  try {
    let data = await getAllUsers()

    return res.send(data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}

exports.updateUser = async function (req, res) {
  try {
    let data = await updateProfile(req.body.id, req.body.data)

    return res.send(data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}


exports.decodeLocation = async function (req, res) {
  try {
    // let data = await updateProfile( req.body.id, req.body.data)

    return res.send(data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}