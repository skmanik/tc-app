const path = require("path");
const router = require("express").Router();
const pushTokenRoutes = require("./pushtoken");
const testRoutes = require("./testroute");

// push token routes
router.use("/api/pushtoken", pushTokenRoutes);

// test routes
router.use(testRoutes);

// send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;