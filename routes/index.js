const path = require("path");
const router = require("express").Router();
const pushTokenRoutes = require("./pushtoken");

// push token routes
router.use("/api/pushtoken", pushTokenRoutes);

// send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;