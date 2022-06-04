const express = require("express");
const router = express.Router();
const diagnosisController = require('../controllers/diagnosisController');

router.get("/add", diagnosisController.addDiagnosis)

module.exports = router;