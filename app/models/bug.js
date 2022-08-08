const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bugModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Bug = mongoose.model('bug', bugModel);

module.exports = Bug;