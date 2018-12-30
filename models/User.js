const mongoose = require("mongoose");

// save ref to Schema constructor
const Schema = mongoose.Schema;

// using Schema constructor, create a new UserSchema object
const UserSchema = new Schema({
	username: String,
	email: String,
	followedGames: [{
		type: mongoose.Schema.ObjectId,
		ref: "Game"
	}],
	tokens: [String]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;