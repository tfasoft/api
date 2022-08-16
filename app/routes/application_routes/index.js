/*
    Route start: /api/*
*/

const express = require("express");

const ApplicationRoutes = require('./ApplucationRoutes');

const app = express();

app.use('*', ApplicationRoutes);

module.exports = app;