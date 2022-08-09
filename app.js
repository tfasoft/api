// Requires
const mongoose = require('mongoose'); // Require MongoDB drive
const app = require('./app/app'); // Import app

// Init ENV
require('dotenv').config();
const env = process.env;

// Add MongoDB URL
const mdb = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_DATABASE}.ji4jf.mongodb.net/${env.MONGO_COLLECTION}?retryWrites=true&w=majority`;

// Connect MongoDB
mongoose.connect(mdb)
    .then((connection) => {
        const port = env.PORT; // Use port in .env

        console.log(`Connected. Running in ${port}`); // Print connected
        app.listen(port); // Start app
    })
    .catch((error) => console.log(error));