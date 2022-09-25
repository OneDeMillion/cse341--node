const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const db = require('../config/db');

// const dbConfig = require("../config/db");

// let _db;

// async function connectDB() {
//     if (_db) {
//         console.log('DB already installed');
//         return _db
//     }
//     try {
//         const client = new MongoClient(db.connectionString);

//         await client.connect();
//         console.log('Connection to DB was Successful');
    
//         await listDatabases(client);
//         _db = client.db(db.name);   
//     } catch (e){
//         console.error("Error with connecting to DB", e);
//     }
// };

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases: ");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// const getDb = () => {
//     if (!_db) {
//       throw Error('Db not initialized');
//     }
//     return _db;
//   };


let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.DB_CONNECTION_STRING)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};




module.exports = { initDb, getDb};