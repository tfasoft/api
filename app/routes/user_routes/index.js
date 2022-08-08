const express = require("express");

const UserRoutes = require('./UserRoutes');

const app = express();

app.use('/user', UserRoutes);

module.exports = app;