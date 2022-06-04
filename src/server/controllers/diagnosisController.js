const { updateProfile } = require("../middleware/middleware");

exports.addDiagnosis = async function (req, res) {
  try {
    let data = await updateProfile(req.body.id, req.body.data)

    return res.send(data)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
}