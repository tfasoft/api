const express = require('express');

const controllers = require('../controllers/AuthenticationControllers');

const router = express.Router();

router.post('/access', controllers.AuthUser);

module.exports = router;