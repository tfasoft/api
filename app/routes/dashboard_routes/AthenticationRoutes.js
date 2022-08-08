const express = require('express');
const controllers = require('../../controllers/dashboard_controllers/AuthenticationControllers');

const router = express.Router();

router.post('/login', controllers.login); // Route login admin
router.post('/register', controllers.register); // Route register admin

module.exports = router;