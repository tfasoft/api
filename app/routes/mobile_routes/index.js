const express = require("express");

const MobileRoutes = require('./MobileRoutes');

const app = express();

app.use('/mobile', MobileRoutes);

module.exports = app;