/*
    Routes name: Dashboard Get Data Routes
    Routes start: /api/dashboard/get
*/

const express = require('express');
const controllers = require('../../controllers/dashboard_controllers/GetDataControllers');

const router = express.Router();

router.post('/admin', controllers.getAdmin); // Route get admin

module.exports = router;