/*
    Controllers: Dashboard
    Controller: Authentication
*/

const Admin = require("../../models/admin");
const randomstring = require("randomstring");

// Login admin
const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findOne(req.body)
        .then((user) => {
            if (user === null) {
                const outData = {
                    error: "user not found"
                }

                res.status(401);
                res.send(outData);
            } else {
                const outData = {
                    id: user._id
                }

                res.status(200);
                res.send(outData);
            }
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(401);
            res.send(outData);
        });
}

// Register admin
const register = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const data = {
        access_token: randomstring.generate({length: 25, charset: 'alphabetic'}),
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        service_type: req.body.service_type,
    };


    const newAdmin = new Admin(data);
    newAdmin.save()
        .then((user) => {
            const outData = {
                id: user._id
            }

            res.status(200);
            res.send(outData);
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(401);
            res.send(outData);
        });
}

module.exports = {
    login,
    register,
}