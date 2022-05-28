exports.getUser = async function (req, res) {
  try {
    const user = req.oidc.user
    console.log("🚀 ~ file: authenticationController.js ~ line 4 ~ user", user);
    res.send({ data: { user } })
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}