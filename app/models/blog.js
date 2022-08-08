const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Blog = mongoose.model('blog', blogModel);

module.exports = Blog;