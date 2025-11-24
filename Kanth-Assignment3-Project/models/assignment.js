// Import mongoose
const mongoose = require('mongoose');

// Define the Assignment schema
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },       // Assignment title
  course: { type: String, required: true },      // Course name
  dueDate: { type: Date, required: true },       // Due date
  description: { type: String }                  // Optional description
});

// Export the Assignment model
module.exports = mongoose.model('Assignment', assignmentSchema);
