const express = require("express");

const { SpamController, SearchController } = require("../../controllers");
const { authenticateToken } = require("../../middlewares/login-middleware");
const router = express.Router();

router.post("/markspam", authenticateToken, SpamController.makeSpam);
router.get("/name", authenticateToken, SearchController.searchByName);
router.get("/phno", authenticateToken, SearchController.searchByNumber);

module.exports = router;
