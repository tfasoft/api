const Duser = require('../../models/duser');

const info = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Duser.findById(req.body.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send(error);
        })
}

const update = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const data = req.body;

    Duser.findByIdAndUpdate(data.uid, data.data)
        .then((result) => {
            res.status(200);
            res.send(result);
        })
        .catch((error) => {
            res.status(401);
            res.send(error);
        })
}

const telegram = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const data = req.body;

    Duser.findByIdAndUpdate(data.uid, data.data)
        .then((result) => {
            res.status(200);
            res.send(result);
        })
        .catch((error) => {
            res.status(401);
            res.send(error);
        })
}

module.exports = {
    info,
    update,
    telegram
}