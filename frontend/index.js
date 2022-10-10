const express = require("express");
const app = express()
const port = process.env.PORT || 8080
// create app by calling express package
// app describes what app looks like and how functions

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});

//app listens on port 3000 -- add function as second parameter for easy access to browser