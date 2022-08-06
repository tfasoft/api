const User = require('../models/user');

const randomstring = require("randomstring");

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const tid = req.body.tid;

    const newToken = randomstring.generate({length: 25, charset: 'alphabetic'});

    User.findOneAndUpdate({ tid }, { token: newToken })
        .then((result) => {
            if (result === null) {
                const data = {
                    code: 1,
                    message: "You are not registered.\nPress register button to register."
                }

                res.status(200);
                res.send(data);
            } else {
                const data = {
                    code: 2,
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

    User.findOne({ tid })
        .then((result) => {
            if (result === null) {
                const userData = {
                    tid,
                    mcode: randomstring.generate({length: 50, charset: 'alphabetic'}),
                    token: randomstring.generate({length: 25, charset: 'alphabetic'})
                }

                const user = new User(userData);
                user.save()
                    .then((user) => {
                        const data = {
                            message: "You are now registered!",
                            user,
                        }
                        
                        res.status(200);
                        res.send(data);
                    })
                    .catch((error) => {
                        const data = {
                            message: "Sorry, you did not registered.",
                            error,
                        }

                        res.status(401);
                        res.send(data);
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

    const data = req.body;

    let iData = `
Your information is listed here:
- name: ${data.name}
- tid: <code>${data.tid}</code>
- Registration status:
    `;

    User.findOne({ tid: data.tid })
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