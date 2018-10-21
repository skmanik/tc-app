const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json');
const router = require("express").Router();

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://tc-app-9e831.firebaseio.com"
});

// matches with "/api/pushtoken"
router.route("/")
	.post((req, res) => {
		const pushToken = req.body.pushToken;
		const message = {
			data: {
				message: 'Hi friend'
			},
			token: pushToken
		};

		admin.messaging().send(message)
			.then((response) => {
				console.log('Successfully sent message:', response);
			})
			.catch((error) => {
				console.log('Error sending message:', error);
			});

		console.log(req.body);
		res.status(200);
	});

module.exports = router;