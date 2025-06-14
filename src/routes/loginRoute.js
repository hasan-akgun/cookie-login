const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middleware/loginMiddleware")
const {createSession} = require("../controller/createSessionController")

router.post('/', verifyUser,createSession);

module.exports = router;