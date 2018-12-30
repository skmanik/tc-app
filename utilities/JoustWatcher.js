// Loops through the database periodically and sends out notifications for any jousts that
// are about to happen.
class JoustWatcher {

	constructor(pushNotificationManager, db) {
		this.pushNotificationManager = pushNotificationManager;
		this.db = db;

		setInterval(this.notifyUsersForJousts.bind(this), 5000);
	}

	notifyUsersForJousts() {
		// Find any jousts with a date before now
		this.db.Joust.find({
			date: { $lte: Date.now() }
		}, function (err, jousts) {
			console.log('Error: ', err);
			console.log('Jousts: ', jousts);
		});
	}

}

module.exports = function(pushNotificationManager, db) {
	return JoustWatcher(pushNotificationManager, db);
}