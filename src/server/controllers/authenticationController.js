exports.getUser = async function (req, res) {
  try {
    // const user = req.oidc.user
    // console.log("🚀 ~ file: authenticationController.js ~ line 4 ~ user", user);
    console.log("heereeee")
    res.send({ data: { user: "sarah " } })
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}