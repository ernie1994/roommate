
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	name: { type: String },
	age: { type: String },
	gender: { type: String },
	rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
});


userSchema.plugin(passportLocalMongoose);


const User = mongoose.model("User", userSchema);



module.exports = User;
