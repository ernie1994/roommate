
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
	name: {type: String},
	age: {type: Number},
	gender: {type: String},
	state: {type: String},
	city: {type: String},
	zip: {type: String}
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);



module.exports = User;
