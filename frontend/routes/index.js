const express = require("express");
const router = express.Router();
const { index } = require("../controllers/index");

router.get("/professional", index);

module.exports = router;
// export the router