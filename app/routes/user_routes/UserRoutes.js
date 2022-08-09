const express = require("express");
const controllers = require('../../controllers/user_controllers/UserControllers');

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.regsiter);
router.post('/info', controllers.info);
router.post('/get', controllers.getUser);
router.post('/connect', controllers.connect);
router.post('/mcode/regenerate', controllers.mcode_regenerate);

module.exports = router;