const mongodb = require('../initializers/db');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    // #swagger.description = 'Gets all contacts in collection'
    try {
        const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
    
};

const getOne = async (req, res) => {
    // #swagger.description = 'Gets one contact identified by id endpoint'
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDb()
            .db('cse341')
            .collection('contacts')
            .find({_id: userId});  
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
    
};

const createOne = async (req, res) => {
    // #swagger.description = 'Create one contact'
    try {
            const contact = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                favoriteColor: req.body.favoriteColor,
                birthday: req.body.birthday
            };
            const response = await mongodb
                .getDb()
                .db('cse341')
                .collection('contacts')
                .insertOne(contact);   
            if (response.acknowledged) {
                res.status(201).json(response);
            } else {
                res.status(500).json(response.error);
            } 
    
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    
};
    
const updateOne = async (req, res) => {
    // #swagger.description = 'Updates one contact identified by id endpoint'
    try{
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
        .db('cse341')
        .collection('contacts')
        .replaceOne({_id: userId}, contact);
        // console.log(response);
        if (response.modifiedCount > 0) {
            console.log(res.status);
            res.status(204).send();
        } else {
            res.status(500).json(response.error);
        } 
    } catch (err) {
        res.status(500).json(response.error);
    }
   
};
    
const deleteOne = async (req, res) => {
    // #swagger.description = 'Deletes one contact identified by id endpoint'
    try {
        const userId = new ObjectId(req.params.id);
        const response = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .deleteOne({_id: userId}, true);
        console.log(response);
        if (response.deletedCount > 0) {
            res.status(200).send({response, status: 200});
        } else {
            res.status(500).json(response.error);
        }    
    } catch (err) {
        res.status(500).json({message: err.message});
    }
         
};

module.exports = {getAll, getOne, createOne, deleteOne, updateOne};