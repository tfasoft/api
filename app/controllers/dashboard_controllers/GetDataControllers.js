/*
    Controllers: Dashboard
    Controller: Get Data
*/

const Admin = require("../../models/admin");

// Get admin
const getAdmin = (req, res) => {
    Admin.findById(req.body.uid)
        .then((user) => {
            if (user === null) {
                const outData = {
                    error: "user not found"
                }

                res.status(401);
                res.send(outData);
            } else {
                res.status(200);
                res.send(user);
            }
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
    getAdmin,
}