require('dotenv').config();

const express = require("express"); // pulls in express library
const bodyParser = require('body-parser'); // 
const app = express(); // use to configure our server
const mongodb = require('./initializers/db'); // 
const routes = require("./routes");
const port = process.env.PORT || 8080;



app
    .use(bodyParser.json()) // use allows us to use middleware1
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use(routes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log({ERROR: ', err'});
    } else {
        app.listen(port);
        console.log(`Connected to DB. Listening on http://localhost:${port}`);
    };
});