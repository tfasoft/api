const express = require('express');
const cors = requre('cors');

const APIRoutes = require('./routes/APIRoutes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.set('json spaces', 2);

app.use('/api', APIRoutes);

module.exports = app;