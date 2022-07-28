const express = require('express');
const cors = require('cors');

const APIRoutes = require('./routes/APIRoutes');
const BotRoutes = require('./routes/BotRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.set('json spaces', 2);

app.use('/api', APIRoutes);
app.use('/bot', BotRoutes);

module.exports = app;