const router = require('express').Router();
const userController = require('../../client/controller/userController');

router.route('/')
	// .get(userController.getAll)
	.post(userController.create);

module.exports = router;