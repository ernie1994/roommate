
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
	name: {type: String},
	age: {type: String},
	gender: {type: String},
	// state: {type: String},
	// city: {type: String},
	// zip: {type: String}
})

const User = mongoose.model("User", userSchema);

module.exports = User;
