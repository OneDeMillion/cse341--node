const express = require("express");
const router = express.Router();
// const { index } = require("../controllers/index");

// router.get("/", index);
router.use('/contacts', require('./contacts'));

module.exports = router;
// export the router