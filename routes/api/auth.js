const router = require('express').Router();
const db = require("../../client/models");
const passport = require("../../passport");



router.get('/user', (req, res, next)=> {

    if (req.body) {
        return res.json({ user: req.user })
    } else {

        return res.json({ user: null })
    }
})

// The route that updates the user model when they fill out the questionnaire
router.post('/user/update', (req,res)=> {

	db.User.findByIdAndUpdate(req.user._id, {$set: req.body}, (err,result)=> {
		if(err){
			console.log(error);
		}
		console.log('RESULT: ' + result);
	})

	return;
	
})


router.post('/login',
    function (req, res, next) {
        next()
    },
    passport.authenticate('local'),
    (req, res)=> {
        const user = JSON.parse(JSON.stringify(req.user)) // hack
        const cleanUser = Object.assign({}, user)
        if (cleanUser) {
            delete cleanUser.password
        }
        res.json({ user: cleanUser })
    }
)



router.post('/logout', (req, res)=> {
    if (req.user) {
        req.session.destroy()
        res.clearCookie('connect.sid') // clean up!
        return res.json({ msg: 'logging you out' })
    } else {
        return res.json({ msg: 'no user to log out!' })
    }
}) 



router.post('/signup', (req, res)=> {
    const { username, password } = req.body

    // res.json("test");
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, userMatch) => {


        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }


        const newUser = new db.User({
            'username': username,
            'password': password
        })


        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    })
})

module.exports = router;