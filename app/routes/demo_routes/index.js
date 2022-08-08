const express = require("express");

const AuthenticationRoutes = require('./AuthenticationRoutes');
const BugRoutes = require('./BugRoutes');
const UserRoutes = require('./UserRoutes');

const app = express();

app.use('/auth', AuthenticationRoutes);
app.use('/user', UserRoutes);
app.use('/bug', BugRoutes);

module.exports = app;