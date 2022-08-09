/*
    Routes name: User Data Routes
    Routes start: /api/user/user
*/

const express = require("express");
const controllers = require('../../controllers/user_controllers/UserControllers');

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.regsiter);
router.post('/info', controllers.info);
router.put('/update', controllers.updateUser);
router.post('/get', controllers.getUser);
router.post('/connect', controllers.connect);
router.post('/mcode/regenerate', controllers.mcode_regenerate);

module.exports = router;