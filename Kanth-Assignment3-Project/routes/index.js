// Import Express and create a router
var express = require('express');
var router = express.Router();

/* GET home page */
// When the user visits "/", render the index.ejs page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment Tracker' });
});

// Export the router so app.js can use it
module.exports = router;
