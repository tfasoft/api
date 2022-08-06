const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.status(200);
    res.send({
        message: "Hello",
    });
}

module.exports = {
    login,
}