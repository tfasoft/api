/*
    Routes name: Errors like 404 and etc
    Routes start: /api/*
*/

const express = require('express');
const controllers = require('../../controllers/application_controllers/ApplicationControllers');

const router = express.Router();

router.get('*', controllers.notFound);

module.exports = router;