exports.getData = async function (req, res) {
  try {
    res.send('<h1>Profile!</h1>')
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}