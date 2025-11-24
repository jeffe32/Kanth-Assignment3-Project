// Import the Express module
var express = require('express');

// Create a new router object
var router = express.Router();

/* 
  Define a route for GET requests to the root of this router.
  When a GET request is made to '/users', this function will run.
*/
router.get('/', function(req, res, next) {
  // Send a simple text response
  res.send('respond with a resource');
});

// Export the router so it can be used in other parts of the app
module.exports = router;
