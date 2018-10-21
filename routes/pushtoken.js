const router = require("express").Router();

// matches with "/api/pushtoken"
router.route("/")
	.post((req, res) => {
		console.log(req.body);
		res.status(200);
	});

module.exports = router;