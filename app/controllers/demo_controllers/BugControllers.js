const Bug = require("../../models/bug")

const newBug = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const bug = new Bug(req.body);
    bug.save()
        .then((result) => {
            res.status(200);
            res.send(result);
        })
        .catch((error) => {
            res.status(500);
            res.send(data);
        });
}

module.exports = {
    newBug,
}