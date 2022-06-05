const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  try {
    return res.send(<h3>Server is up and running</h3> >)
  } catch (err) {
    console.log("~ err", err);
    return res.send({ error: err })
  }
})

module.exports = router;