const express = require("express");
const router = express.Router();
require("dotenv").config();
const authenticationController = require('../controllers/authenticationController');

router.get("/", authenticationController.getUser)

module.exports = router;  
