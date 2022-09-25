// const { restart } = require('nodemon');
const mongodb = require('../initializers/db');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {

    const result = await mongodb
        .connectDB()
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
        .connectDB()
        .db('CSE341')
        .collection('contacts')
        .find({_id: userId});  
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {getAll, getOne};