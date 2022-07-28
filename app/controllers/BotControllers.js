const randomstring = require("randomstring");
const User = require('../models/user');

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const tid = req.body;
    console.log(tid);

    const newToken = randomstring.generate({length: 25, charset: 'alphabetic'});

    User.findOneAndUpdate({ "tid": `${tid}` }, { "token": newToken })
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

    const tid = req.body.tid;
    console.log(tid);

    User.findOne({ "tid": `${tid}` })
        .then((result) => {
            if (result === null) {
                const userData = {
                    "tid": `${tid}`,
                    "token": randomstring.generate({length: 25, charset: 'alphabetic'})
                }

                const user = new User(userData);
                user.save()
                    .then((user) => {
                        const data = {
                            message: "You are now registered!"
                        }
                        
                        res.status(200);
                        res.send(data);
                    })
                    .catch((error) => {
                        res.status(401);
                        res.send(error);
                    });
            } else {
                const data = {
                    message: "You are now a user and don't need a new registration."
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

const info = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const tid = req.body.tid;
    console.log(tid);

    let iData = `
Your information is listed here:
- name: ${tid}
- tid: <code>${tid}</code>
- Registration status:
    `;

    User.findOne({ "tid": `${tid}` })
        .then((result) => {
            if (result === null) {
                iData += 'You are not registed yet.';

                const data = {
                    "data": iData,
                }

                res.status(200);
                res.send(data);
            } else {
                iData += 'You are registered.';
                
                const data = {
                    "data": iData,
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

module.exports = {
    login,
    regsiter,
    info,
}