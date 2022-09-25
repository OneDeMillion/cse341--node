// import MongoClient to connect to cluster in mongodb
const {MongoClient} = require('mongodb');
const db = require('../config/db');

const dbConfig = require("../config/db");


async function connectDB() {
    if (db) return db;
    try {
        const client = new MongoClient(dbConfig.connectionString);

        await client.connect();
        console.log('Connection to DB was Successful');
    
        await listDatabases(client);
        db = client.db(dbConfig.name);   
        return db; 
    } catch (e){
        console.error("Error with connecting to DB", e);
    } finally {
        await client.close();
    }
};

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


module.exports = connectDB;