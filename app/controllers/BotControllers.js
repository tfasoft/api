const randomstring = require("randomstring");
const User = require('../models/user');

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const tid = req.body.tid;

    const newToken = randomstring.generate({length: 25, charset: 'alphabetic'});

    User.findOneAndUpdate({ tid: tid }, { token: newToken })
        .then((result) => {
            if (result === null) {
                const data = {
                    message: "You are not registered.\nPress register button to register."
                }

                res.status(401);
                res.send(data);
            } else {
                const data = {
                    token: newToken
                }
                
                res.status(200);
                res.send(data);
            }
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        });
}

const regsiter = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.send('Login');
}

const info = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.send('Login');
}

module.exports = {
    login,
    regsiter,
    info,
}