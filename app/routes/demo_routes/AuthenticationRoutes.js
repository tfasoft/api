/*
    Routes name: Demo Authentiocation Routes
    Routes start: /api/demo/auth
*/

const express = require("express");
const controllers = require("../../controllers/demo_controllers/AuthenticationControllers");

const router = express.Router();

router.post('/telegram', controllers.TelegramAuthentication);
router.post('/register', controllers.EmailPasswordRegister);
router.post('/login', controllers.EmailPasswordLogin);

module.exports = router;