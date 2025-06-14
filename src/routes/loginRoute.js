const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middleware/loginMiddleware")

router.post('/', verifyUser);

module.exports = router;