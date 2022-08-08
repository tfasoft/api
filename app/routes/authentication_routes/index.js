const express = require("express");

const AuthenticationRoutes = require('./AuthenticationRoutes');

const app = express();

app.use('/auth', AuthenticationRoutes);

module.exports = app;