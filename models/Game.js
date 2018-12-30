const mongoose = require("mongoose");

// save ref to Schema constructor
const Schema = mongoose.Schema;

// using Schema constructor, create a new GameSchema object
const GameSchema = new Schema({
	name: String,
	jousts: [{
		type: mongoose.Schema.ObjectId,
		ref: "Joust"
	}]
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;