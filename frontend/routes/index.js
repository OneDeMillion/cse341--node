const routes = require("express").Router();

const { user } = require("../controllers/index");

routes.get("/professional", user);

module.exports = router;
// export the router