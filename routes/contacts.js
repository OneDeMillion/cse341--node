const express = require("express");
const router = express.Router();

const contactsController = require('../controllers/contacts');

// gets all contacts in collection
router.get('/', contactsController.getAll)
// gets contact identified by id endpoint
router.get('/:id', contactsController.getOne);

module.exports = router;