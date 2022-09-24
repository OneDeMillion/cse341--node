const express = require("express");
// requires dotenv pkg and injects into project configuration
require('dotenv').config();
const app = express();

const routes = require("./routes/index");

app.use(routes);

app.listen(3000, () => {
    console.log("app listening on http://localhost:3000")
});


// import MongoClient to connect to cluster in mongodb
const {MongoClient} = require('mongodb');

async function connectDB() {
    const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_PASS}@cluster0.zn4io.mongodb.net/?retryWrites=true&w=majority`;
    console.log(uri);
    // create instance of MongoClient
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connection to DB was Successful');
    
        await listDatabases(client);    
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
};

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

connectDB().catch(console.error);

