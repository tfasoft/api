const express = require('express');

const controllers = require('../controllers/APIControllers');

const router = express.Router();

router.get('/access/:access_token/:user_token', controllers.AuthUser);

module.exports = router;