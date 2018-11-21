const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json');

class PushNotificationManager {

	constructor() {
		// set up firebase with our credentials
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: "https://tc-app-9e831.firebaseio.com"
		});
	}
	
	registerToken(token) {
		// send dummy message
		const promise = this.sendNotification(token, "Hi", "I am bad at this");

		const dummy = new Promise((resolve, reject) => {
			resolve();
		});

		return dummy;
	}

	sendNotification(pushToken, messageTitle, messageBody) {
		const message = {
			notification: {
				title: messageTitle,
				body: messageBody
			},
			token: pushToken
		};

		const promise = admin.messaging().send(message);

		return promise;
	}

}

module.exports = PushNotificationManager;
