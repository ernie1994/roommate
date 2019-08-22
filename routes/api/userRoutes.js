const router = require('express').Router();
// const passport = require('../../client/config/passport');
// const userController = require('../../client/controller/userController');
const roomController = require('../../client/controller/roomController');
// const loginController = require('../../client/controller/authController');


// router.route('/questionnaire')
// 	.get(userController.getAll)
// 	.post(userController.create)
// 	.delete(userController.deleteAll);

router.route('/rooms')
    .get(roomController.getSome)
    .post(roomController.create)
    .delete(roomController.deleteAll);

// router.route('/signup')
// 	.post(loginController.createUser);

// router.route('/login')
// 	.get(loginController.userTest);
// // .post(loginController.userAuth);

// router.post('/login',
// 	passport.authenticate('local'),
// 	(req, res) => {

// 		res.json(req.body);
// 	}

// )

// router.route('/login/test')
// 	.get(loginController.userTest);

module.exports = router;