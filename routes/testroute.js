const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");
const notificationManager = new (require("../utilities/PushNotificationManager"))();
const joustWatcher = require("../utilities/JoustWatcher")(notificationManager, db);

router.route("/testroute")
	.post((req, res) => {
		// do things
		console.log(req.body.pushToken);

		// create dummy data for stuff
		const game = new db.Game({
			_id: new mongoose.Types.ObjectId(),
			name: "Mario Party",
			jousts: []
		});

		game.save(function(err) {
			if (err) console.log("Error with save game", err);

			// other
			const joust = new db.Joust({
				_id: new mongoose.Types.ObjectId(),
				name: "Mario Party Sharty",
				date: moment(Date.now()).add(1, 'm').toDate(),
				games: [game._id]
			});

			joust.save(function(err) {
				if (err) console.log("Error with save joust", err);

				const user = new db.User({
					_id: new mongoose.Types.ObjectId(),
					username: "Bumper",
					email: "bumper@bartholomew.com",
					tokens: [req.body.pushToken],
					followedGames: [game._id]
				});

				user.save(function(err) {
					if (err) console.log("Error with save user", err);
					console.log(game);
					console.log(joust);
					console.log(user);
				})
			})
		});

		res.status(200);
	});

module.exports = router;