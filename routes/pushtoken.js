const router = require("express").Router();
const notificationManager = new (require("../utilities/PushNotificationManager"))();

// matches with "/api/pushtoken"
router.route("/")
	.post((req, res) => {
		notificationManager.registerToken(req.body.pushToken)
			.then((response) => {
				res.status(200);
				console.log("Successfully registered token! Cheer!");
			})
			.catch((error) => {
				res.status(500);
				console.log("Error with registered token!", error);
			});
	});

module.exports = router;