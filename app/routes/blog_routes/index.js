/*
    Route start: /api/blog
*/

const express = require("express");

const AuthenticationRoutes = require('./AuthenticationRoutes');
const BlogRoutes = require('./BlogRoutes');

const app = express();

app.use('/blogs', BlogRoutes);
app.use('/auth', AuthenticationRoutes);

module.exports = app;