const express = require("express");

// const {authController} = require('../../controllers');

const authRoutes = require("./auth-routes");
const loginRoutes = require("./login-routes");
const workerRoutes = require("./worker-routes");
const router = express.Router();

router.use("/register", authRoutes);
router.use("/login", loginRoutes);
router.use("/system", workerRoutes);

module.exports = router;
