
exports.getData = async function (req, res) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    const response = await axios.get(`${process.env.VITE_AUTH0_ISSUER}userinfo`, {
      headers:
        { authorization: `Bearer ${accessToken}` }
    })
    res.send(response.data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}