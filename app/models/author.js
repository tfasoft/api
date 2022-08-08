const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorModel = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Author = mongoose.model('author', authorModel);

module.exports = Author;