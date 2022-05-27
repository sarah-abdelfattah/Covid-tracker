exports.getData = async function (req, res) {
  try {
    console.log("🚀 ~ file: dashboardController.js ~ line 4 ~ req.params", req.params);
    res.send('<h1>Dashboard!</h1>')
    // res.render("index", {title: 'Express'})
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}