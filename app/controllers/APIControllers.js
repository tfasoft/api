const Admin = require('./app/models/admin');
const User = require('./app/models/user');

const AuthUser = (req, res) => {
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
}

module.exports = {
    AuthUser,
}