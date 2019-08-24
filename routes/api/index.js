const router = require("express").Router();
const user = require("./userRoutes");
const auth = require("./auth");
const userController = require('../../client/controller/userController');
const roomController = require('../../client/controller/roomController');


// Book routes
router.use("/user", user);

router.route('/')
    .get(userController.getAll)
    .post(userController.create)
    .delete(userController.deleteAll);

router.route('/rooms')
    .get(roomController.getSome)
    .post(roomController.create)
    .delete(roomController.deleteAll);

router.route('/userRooms')
	.get(roomController.getUserRooms);


//authentication routes
router.use(auth);

module.exports = router;
