const express = require('express');
const router = express.Router();
const controller = require('../controllers/assignmentController');

// View all
router.get('/', controller.list);

// Add
router.get('/add', controller.addForm);
router.post('/add', controller.add);

// Edit
router.get('/edit/:id', controller.editForm);
router.post('/edit/:id', controller.edit);

// Delete
router.get('/delete/:id', controller.delete);

module.exports = router;
