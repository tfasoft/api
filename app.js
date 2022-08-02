const mongoose = require('mongoose');
const app = require('./app/app');

require('dotenv').config();
const env = process.env;

const mdb = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_DATABASE}.ji4jf.mongodb.net/${env.MONGO_COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(mdb)
    .then((connection) => {
        const port = env.PORT;

        console.log(`Connected. Running in ${port}`)
        app.listen(port);
    })
    .catch((error) => console.log(error));