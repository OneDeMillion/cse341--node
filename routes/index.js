
const express = require('express');
const router = require("express").Router();

// router.get("/", index);
router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./docs'));

module.exports = router;
// export the router