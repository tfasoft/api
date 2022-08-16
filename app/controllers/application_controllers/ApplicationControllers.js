// 404
const notFound = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.status(404).send({message: "Not found"});
}

module.exports = {
    notFound,
}