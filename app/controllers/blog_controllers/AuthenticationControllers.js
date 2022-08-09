/*
    Controllers: Blog
    Controller: Authentication
*/

const Author = require("../../models/author");

const login = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const userInputData = req.body;

    Author.findOne(userInputData)
        .then((author) => {
            if (author === null) {
                const data = {
                    message: "Sorry author is not here!",
                }

                res.status(401);
                res.send(data);
            } else {
                const data = {
                    author,
                }

                res.status(200);
                res.send(data);
            }
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        })
}

const register = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const userInputData = req.body;

    const author = new Author(userInputData);
    author.save()
        .then((author) => {
            const data = {
                author,
            }

            res.status(200);
            res.send(data);
        })
        .catch((error) => {
            res.status(500);
            res.send(error);
        })
}

module.exports = {
    login,
    register,
}