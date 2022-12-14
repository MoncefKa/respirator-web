const express = require("express");
const { check } = require("express-validator");
const { createID, signin, createDevice} = require("../controllers/ids");


const router = express.Router();

router.post("/createdevice", createDevice);
router.post("/createid", createID );
router.post("/signin", signin);

module.exports = router;
