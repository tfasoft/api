/*
    Routes name: Demo User Routes
    Routes start: /api/demo/user
*/

const express = require('express');
const controllers = require('../../controllers/demo_controllers/UserControllers');

const router = express.Router();

router.post('/info', controllers.info);
router.post('/update', controllers.update);
router.post('/enabletfa', controllers.telegram);

module.exports = router;