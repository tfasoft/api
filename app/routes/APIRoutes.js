const app = require('express');

const controllers = require('../controllers/APIControllers');

const routes = app.Router();

routes.post('/access/:access_token/:user_token', controllers.AuthUser);

module.exports = routes;