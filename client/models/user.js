
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const userSchema = new Schema({

	username: { type: String },
	password: { type: String },

})

userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})


// userSchema.methods = {
// 	checkPassword: function(password) {
// 		return bcrypt.compareSync(password, this.password);
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bycrypt.hashSync(this.password, bcrypt.genSaltScync(10), null);
// 	}
// }

// userSchema.pre('save', function (next) {
// 	if(!this.password) {
// 		console.log('no password chump');
// 		next();
// 	}
// 	else {
// 		this.password = this.hashPassword(this.password);
// 		next();
// 	}
// })


const User = mongoose.model("User", userSchema);

// User.prototype.validPassword = function(password) {
// 		return bcrypt.compareSync(password, this.password);
// 	};

// // Hash the password so it is more secure
// User.addHook("beforeCreate", (user)=>{
// 	user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });



module.exports = User;
