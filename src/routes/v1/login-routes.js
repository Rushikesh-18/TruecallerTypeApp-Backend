const express = require("express");

const { LoginController } = require("../../controllers");
const router = express.Router();

router.post("/user", LoginController.loginUser);

module.exports = router;
