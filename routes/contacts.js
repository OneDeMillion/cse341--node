const express = require("express");
const router = express.Router();

const contactsController = require('../controllers/contacts');

// gets all contacts in collection
router.get('/', contactsController.getAll)
// gets contact identified by id endpoint
router.get('/:id', contactsController.getOne);
// creates a new contact
router.post('/', contactsController.createOne);

// updates a contact identified by id
router.put('/:id', contactsController.updateOne);

// deletes a contact identified by id
router.delete('/:id', contactsController.deleteOne);


module.exports = router;