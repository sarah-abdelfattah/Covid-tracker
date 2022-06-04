const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.getUser)
router.get("/all", userController.getAll)
router.post("/update", userController.updateUser)
router.post("/location", userController.decodeLocation)

module.exports = router;  