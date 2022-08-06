const express = require("express");

const controllers = require("../controllers/MobileControllers");

const router = express.Router();

router.post('/auth', controllers.auth);
router.post('/connect', controllers.connect);

module.exports = router;