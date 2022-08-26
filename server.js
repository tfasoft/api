// Requires
const mongoose = require('mongoose'); // Require MongoDB drive
const app = require('./app/app'); // Import app

// Init ENV
require('dotenv').config();
const env = process.env;

// Connect MongoDB
mongoose.connect(env.MONGO_URL)
    .then((connection) => {
        const port = env.PORT; // Use port in .env

        app.listen(
            port, // Listen in port that is detected
            () => console.log(`Connected. Running in ${port}`), // Print Connected
        ); // Start app
    })
    .catch((error) => console.log(error));