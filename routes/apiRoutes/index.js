const router = require('express').Router();
const userController = require('../../client/controller/userController');
const roomController = require('../../client/controller/roomController');


router.route('/')
	.get(userController.getAll)
	.post(userController.create)
	.delete(userController.deleteAll);

router.route('/rooms')
	.get(roomController.getSome)
	.post(roomController.create)
	.delete(roomController.deleteAll);

module.exports = router;