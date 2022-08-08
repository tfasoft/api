const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const duserModule = new Schema({
    tid: {
        type: String,
        required: false,
        default: null,
    },
    email: {
        type: String,
        required: false,
        default: null,
    },
    password: {
        type: String,
        required: false,
        default: null,
    },
    name: {
        type: String,
        required: false,
        default: null,
    },
}, {timestamps: true});

const Duser = mongoose.model('duser', duserModule);

module.exports = Duser;
