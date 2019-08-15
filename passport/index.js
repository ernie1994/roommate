const passport = require('passport');
const LocalStrategy = require("./localStrategy");
const db = require("../client/models");


passport.serializeUser((user, done) => {
    console.log('=== serialize ... called ===')
    console.log(user) // the whole raw user object!
    console.log('---------')
    done(null, user)
})

passport.deserializeUser((id, done) => {
    console.log('DEserialize ... called')
    db.User.findOne(
        { _id: id },
        (err, user) => {
            console.log('======= DESERILAIZE USER CALLED ======')
            console.log(user)
            console.log('--------------')
            done(null, user)
        }
    )
})

passport.use(LocalStrategy)

module.exports = passport;