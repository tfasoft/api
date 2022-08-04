const express = require('express');
const cors = require('cors');

const APIRoutes = require('./routes/APIRoutes');
const UserRoutes = require('./routes/UserRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.set('json spaces', 2);

app.use('/api/auth', APIRoutes);
app.use('/api/user', UserRoutes);

module.exports = app;