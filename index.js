const express = require("express"); // pulls in express library
const bodyParser = require('body-parser'); // 
const app = express(); // use to configure our server
const mongodb = require('./initializers/db'); // 

const routes = require("./routes/index");
const port = process.env.PORT || 8080;



app
    .use(bodyParser.json()) // use allows us to use middleware
    .use(routes)
    .listen(3000, () => { // says what port we want to listen on
        console.log("app listening on http://localhost:3000"); // alerts to user 
    });

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB. Listening on http://localhost:${port}`);
    };
});