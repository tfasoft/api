const express = require("express");
const controllers = require("../../controllers/mobile_controllers/MobileControllers");

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.post('/connect', controllers.connect);

module.exports = router;