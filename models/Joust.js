const mongoose = require("mongoose");

// save ref to Schema constructor
const Schema = mongoose.Schema;

// using Schema constructor, create a new JoustSchema object
const JoustSchema = new Schema({
	name: String,
	date: Date,
	games: [{
		type: mongoose.Schema.ObjectId,
		ref: "Game"
	}]
})

const Joust = mongoose.model("Joust", JoustSchema);

module.exports = Joust;