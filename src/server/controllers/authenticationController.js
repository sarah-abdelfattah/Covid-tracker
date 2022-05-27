exports.getData = async function (req, res) {
  try {
    console.log("🚀 ~ file: authenticationController.js ~ line 4 ~ req.params", req);
    // res.send('<h1>Authentication!</h1>')
    res.send('authh')
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}