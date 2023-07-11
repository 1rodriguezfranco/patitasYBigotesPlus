const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/table", adminController.table);

module.exports = router;