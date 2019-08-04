const router = require('express').Router();
const userController = require('../../client/controller/userController');

router.route('/')
	.post(userController.create);

router.route('/search')
	.get(() => {
		//find all rooms that match criteria
	});

module.exports = router;