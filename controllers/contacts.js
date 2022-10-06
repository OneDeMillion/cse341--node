// const { restart } = require('nodemon');
const { MongoDBNamespace } = require('mongodb');
const mongodb = require('../initializers/db');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res, next) => {
    
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection('contacts')
        .find({_id: userId});  
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createOne = async (req, res, next) => {

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb
    .getDb()
    .db('CSE341')
    .collection('contacts')
    .insertOne(contact);   
    if (response.acknowledged) {
        res.status(201).json({response, status: 201});
    } else {
        res.status(500).json(response.error);
    };

}
    
const updateOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }; 
    const response = await mongodb
    .getDb()
    .db('CSE341')
    .collection('contacts')
    .replaceOne({_id: userId}, contact);
    // console.log(response);
    if (response.modifiedCount > 0) {
        console.log(res.status);
        res.status(204).send();
    } else {
        res.status(500).json(response.error);
    }
}
    
const deleteOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
    .getDb()
    .db('CSE341')
    .collection('contacts')
    .deleteOne({_id: userId}, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(200).send({response, status: 200});
    } else {
        res.status(500).json(response.error);
    }
         
}

module.exports = {getAll, getOne, createOne, deleteOne, updateOne};