const router = require("express").Router();
const notificationManager = new (require("../utilities/PushNotificationManager"))();

// matches with "/api/pushtoken"
router.route("/")
	.post((req, res) => {
		notificationManager.registerToken(req.body.pushToken);

		console.log(req.body);
		res.status(200);
	});

module.exports = router;