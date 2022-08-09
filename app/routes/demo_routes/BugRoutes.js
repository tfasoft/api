/*
    Routes name: Demo Report Bug Routes
    Routes start: /api/demo/bug
*/

const express = require("express");
const controllers = require("../../controllers/demo_controllers/BugControllers");

const router = express.Router();

router.post('/new', controllers.newBug);

module.exports = router;