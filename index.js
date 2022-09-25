const express = require("express");
const app = express();

const routes = require("./routes/index");

const connectDB = require("./initializers/db");

app.use(routes);

connectDB().then(() => {
    app.listen(8080, () => {
        console.log("app listening on http://localhost:8080");
    });    
});

