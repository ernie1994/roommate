
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({

	username: {type: String},
	password: {type: String},
	name: { type: String },
	age: { type: String },
	gender: { type: String },
	rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
})


userSchema.plugin(passportLocalMongoose);

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
