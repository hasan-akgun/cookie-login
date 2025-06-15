const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middleware/loginMiddleware")
const {createSession} = require("../controller/createSessionController")
const {verifySessionId} = require("../controller/verifySessionIdController")

router.post('/', verifyUser,createSession);
router.get('/', verifySessionId);

module.exports = router;