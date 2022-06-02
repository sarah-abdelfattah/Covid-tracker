exports.getDashboard = async function (req, res) {
  try {
    res.send('<h1>Dashboard!</h1>')
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}