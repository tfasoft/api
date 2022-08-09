/*
    Route start: /api/dashboard
*/

const express = require("express");

const AuthenticationRoutes = require('./AthenticationRoutes');
const ChangeRoutes = require('./ChangeRoutes');
const GetDataRoutes = require('./GetDataRoutes');

const app = express();

app.use('/auth', AuthenticationRoutes);
app.use('/change', ChangeRoutes);
app.use('/get', GetDataRoutes);

module.exports = app;