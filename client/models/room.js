const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    address: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: String },
    description: { type: String },
    dogAllergy: Boolean,
    catAllergy: Boolean,
    otherAllergy: Boolean,
    gender: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    lat: { type: String },
    lng: { type: String }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;