exports.getData = async function (req, res) {
  try {
    console.log("🚀 ~ file: profileController.js ~ line 2 ~ req", req.oidc.user);

    res.send('<h1>Profile!</h1>')
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}