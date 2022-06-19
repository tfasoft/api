const express = require('express');
const Admin = require('./modules/admin');
const User = require('./modules/user');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('json spaces', 2);

app.get('/api/access/:access_token/:user_token', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findOne({access_token: req.params.access_token})
        .then((admin_result) => {
            User.findOne({token: req.params.user_token})
                .then((user_result) => {
                    const data = {
                        error: 800,
                        user: user_result
                    };
        
                    res.send(data);
                })
                .catch((error) => {
                    const data = {
                        error: 820,
                        message: "User authentication token is not valid"
                    };
        
                    res.send(data);
                });
        })
        .catch((error) => {
            const data = {
                error: 290,
                message: "Admin access token is not valid"
            };

            res.send(data);
        });    
});

app.listen(8000);