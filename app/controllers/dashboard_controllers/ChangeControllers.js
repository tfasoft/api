const Admin = require("../../models/admin");

// Change name
const changeName = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findByIdAndUpdate(req.body.id, { name: req.body.name })
        .then((result) => {
            const outData = {
                "message": "name changed"
            }

            res.status(200);
            res.send(outData);
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(500);
            res.send(outData);
        });
}

// Change Name
const changeUsername = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findByIdAndUpdate(req.body.id, { username: req.body.name })
        .then((result) => {
            const outData = {
                "message": "username changed"
            }

            res.status(200);
            res.send(outData);
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(500);
            res.send(outData);
        });
}

// Change password
const changePassword = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Admin.findByIdAndUpdate(req.body.id, { password: req.body.password })
        .then((result) => {
            const outData = {
                "message": "password changed"
            }

            res.status(200);
            res.send(outData);
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(500);
            res.send(outData);
        });
}

// Delete user
const deleteUser = (req, res) => {
    Admin.findByIdAndRemove(req.body.id)
        .then((result) => {
            const outData = {
                "message": "user deleted"
            }

            res.status(200);
            res.send(outData);
        })
        .catch((error) => {
            const outData = {
                error: error.message
            }

            res.status(500);
            res.send(outData);
        });
}


module.exports = {
    changeName,
    changeUsername,
    changePassword,
    deleteUser,
}