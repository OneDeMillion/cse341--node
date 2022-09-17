const express = require("express");
const app = express()
// create app by calling express package
// app describes what app looks like and how functions
const routes = require("./routes/index");

app.use(routes);

app.listen(3000, () => {
    console.log("app listening on http://localhost:3000")
});

// app listens on port 3000 -- add function as second parameter for easy access to browser