const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('json spaces', 2);

app.get('/api/access/:access_token/:user_token', (req, res) => {
    const data = {
        "access-token": req.params.access_token,
        "user-token": req.params.user_token
    };

    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
});

app.listen(8000);