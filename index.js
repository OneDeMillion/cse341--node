const express = require("express");
const bodyParser = require('body-Parser');
const app = express();
const mongodb = require('./initializers/db');

const routes = require("./routes/index");
const port = process.env.PORT || 8080;



app
    .use(bodyParser.json())
    .use(routes)
    .listen(3000, () => {
        console.log("app listening on http://localhost:3000");
    });

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB. Listening on ${port}`);
    };
});