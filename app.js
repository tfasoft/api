const express = require('express');
const mongoose = require('mongoose');
const cors = requre('cors');

const Admin = require('./app/models/admin');
const User = require('./app/models/user');

require('dotenv').config();
const env = process.env;

const app = express();

const mdb = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_DATABASE}.ji4jf.mongodb.net/${env.MONGO_COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(mdb)
    .then((connection) => {
        console.log('Connected');
        app.listen(env.PORT || 8000);
    })
    .catch((error) => console.log(error));

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.set('json spaces', 2);

app.get('/api/access/:access_token/:user_token', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findOne({access_token: req.params.access_token})
        .then((admin_result) => {
            if (admin_result === null) {
                res.status(401);
                res.send({
                    message: "Admin access token is not valid"
                });
            } else {
                User.findOneAndUpdate({token: req.params.user_token}, {token: null})
                    .then((user_result) => {
                        if (user_result === null) {
                            res.status(401);
                            res.send({
                                message: "User authentication token is not valid"
                            });
                        } else {
                            res.status(200);
                            res.send({
                                user: user_result
                            });
                        }
                    })
                    .catch((error) => {});
            }
        })
        .catch((error) => {});
});