const express = require("express");
const router = express.Router();
const { checkJwt } = require("../middleware/check-jwt.middleware");
const profileController = require('../controllers/profileController');

router.get("/", checkJwt, profileController.getData)

module.exports = router;  