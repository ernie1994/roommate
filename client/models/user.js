
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const userSchema = new Schema({

	username: { type: String },
	password: { type: String },
	name: {type: String},
	age: {type: Number},
	gender: {type: String},
	address: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: Number },
	bio: {type: String},
	allergies: {type: String},
	pets: {type: String},
	drinks: {type: String},
	smokes: {type: String},
	upLate: {type: String}

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
});


const User = mongoose.model("User", userSchema);

module.exports = User;
