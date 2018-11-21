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
		this.sendNotification(token, "Hi", "I am bad at this");
	}

	sendNotification(pushToken, messageTitle, messageBody) {
		const message = {
			notification: {
				title: messageTitle,
				body: messageBody
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
	}

}

module.exports = PushNotificationManager;
