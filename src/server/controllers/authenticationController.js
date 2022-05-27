exports.getData = async function (req, res) {
  try {
    res.send('authh')
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}