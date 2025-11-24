// Import Express and create a router
const express = require('express');
const router = express.Router();

// Load the assignment controller
const controller = require('../controllers/assignmentController');

// View all assignments
router.get('/', controller.list);

// Show Add Assignment form / Handle Add
router.get('/add', controller.addForm);
router.post('/add', controller.add);

// Show Edit Assignment form / Handle Edit
router.get('/edit/:id', controller.editForm);
router.post('/edit/:id', controller.edit);

// Delete an assignment
router.get('/delete/:id', controller.delete);

// Export the router
module.exports = router;
