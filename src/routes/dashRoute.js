const express = require("express")
const router = express.Router();

const endSession = require("../controller/endSessionController")

router.get('/', endSession);

module.exports = router;