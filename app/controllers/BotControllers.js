const User = require('../models/user');

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.send('Login');
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