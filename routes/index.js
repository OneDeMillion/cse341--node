const router = require("express").Router();

// router.get("/", index);
router.use('/contacts', require('./contacts'));

module.exports = router;
// export the router