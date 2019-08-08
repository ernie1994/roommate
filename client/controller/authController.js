const db = require('../models');
const passport = require('../config/passport');
// const User = require('../models/user');

function authenticate() {
	passport.authenticate("local"),
	(req,res)=> {
		res.json(req.body);
	}
}

module.exports = {

	createUser: function(req,res) {
		// User.register({username: req.body.username, active: true}, req.body.password, function(err, user){
		// 	if(err){
		// 		console.log(err)
		// 	}
		// 	else{
		// 		console.log(User);
		// 	}
		// })
		console.log("we makin users baybeeee");
		console.log(req.body);
		db.User.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	userTest: function(req, res) {
		// console.log(req);
		if(req.user) {
			res.json(req.user);
		}
		else {
			res.json("no user is signed in");
		}
	},

	// userAuth: function(req,res) {
	// 	function (req, res, next) {
    //     next()
    // },
    // passport.authenticate('local'),
    // (req, res) => {
    //     const user = JSON.parse(JSON.stringify(req.user)) // hack
    //     const cleanUser = Object.assign({}, user)
    //     if (cleanUser.local) {
    //         delete cleanUser.local.password
    //     }
    //     res.json({ user: cleanUser })
    // }
    
		
	// } 

	

	// userAuth: function (req, res, next) {
    //     next()
    // },
    // passport.authenticate('local'),
    // (req, res) => {
    //     const user = JSON.parse(JSON.stringify(req.user)) // hack
    //     const cleanUser = Object.assign({}, user)
    //     if (cleanUser.local) {
    //         delete cleanUser.local.password
    //     }
    //     res.json({ user: cleanUser })
    // },

	// userAuth: function(req,res, next) {
	// 	// passport.authenticate("local")(req,res, function() {
	// 	// 	res.json(req);
	// 	// })
	// 	next();
	// 	passport.authenticate("local"), (req,res) => {
	// 		res.json(req.body);
	// 	}
		
	// }
}