// import MongoClient to connect to cluster in mongodb
const {MongoClient} = require('mongodb');
const db = require('../config/db');

// const dbConfig = require("../config/db");

let _db;

async function connectDB() {
    if (_db) {
        console.log('DB already installed');
        return _db
    }
    try {
        const client = new MongoClient(db.connectionString);

        await client.connect();
        console.log('Connection to DB was Successful');
    
        await listDatabases(client);
        _db = client.db(db.name);   
        return _db; 
    } catch (e){
        console.error("Error with connecting to DB", e);
    }
};

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};




module.exports = {connectDB, listDatabases};