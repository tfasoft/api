/*
    User Model
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModule = new Schema({
    tid: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    mcode: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
        default: "",
    },
    email: {
        type: String,
        required: false,
        default: "",
    },
    password: {
        type: String,
        required: false,
        default: "",
    },
}, {timestamps: true});

const User = mongoose.model('user', userModule);

module.exports = User;