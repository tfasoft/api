const express = require("express");

const controllers = require('../controllers/BotControllers');

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.regsiter);
router.post('/info', controllers.info);

module.exports = router;