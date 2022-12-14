require('dotenv').config();
const express = require("express"); // pulls in express library
const bodyParser = require('body-parser'); // 
const app = express(); // use to configure our server
const mongodb = require('./initializers/db'); // 
const port = process.env.PORT || 8080;


app
    .use(bodyParser.json()) // use allows us to use middleware1
    .use((req, res, next) => {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB. Listening on http://localhost:${port}`);
    }
});