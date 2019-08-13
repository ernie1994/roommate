const router = require("express").Router();
const user = require("./userRoutes");
const auth = require("./auth");

// Book routes
router.use("/user", user);

//authentication routes
router.use(auth);

module.exports = router;
