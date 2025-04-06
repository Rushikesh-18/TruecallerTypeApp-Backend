const express = require("express");

const { AuthController } = require("../../controllers");
const router = express.Router();

router.post("/user", AuthController.registerUser);

module.exports = router;
