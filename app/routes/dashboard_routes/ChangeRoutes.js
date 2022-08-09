/*
    Routes name: Dashboard Change Data Routes
    Routes start: /api/dashboard/change
*/

const express = require('express');
const controllers = require('../../controllers/dashboard_controllers/ChangeControllers');

const router = express.Router();

router.post('/name', controllers.changeName); // Route change name
router.post('/password', controllers.changePassword); // Route change password
router.post('/username', controllers.changeUsername); // Route change username
router.post('/delete', controllers.deleteUser); // Route delete user

module.exports = router;