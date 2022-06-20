const express = require('express');
const mongoose = require('mongoose');

const Admin = require('./modules/admin');
const User = require('./modules/user');

require('dotenv').config();
const env = process.env;

const app = express();

const mdb = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_DATABASE}.ji4jf.mongodb.net/${env.MONGO_COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(mdb)
    .then((connection) => {
        console.log('Connected');
        app.listen(8000);
    })
    .catch((error) => console.log(error));

app.use(express.urlencoded({extended: true}));
app.set('json spaces', 2);

app.get('/api/access/:access_token/:user_token', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findOne({access_token: req.params.access_token})
        .orFail((error) => {
            const data = {
                error: 290,
                message: "Admin access token is not valid"
            };

            res.send(data);
        })
        .then((admin_result) => {
            User.findOneAndUpdate({toekn: req.params.user_token}, {toekn: null})
                .orFail((error) => {
                    const data = {
                        error: 820,
                        message: "User authentication token is not valid"
                    };
        
                    res.send(data);
                })
                .then((user_result) => {
                    const data = {
                        error: 800,
                        user: user_result
                    };
        
                    res.send(data);
                });
        });
});