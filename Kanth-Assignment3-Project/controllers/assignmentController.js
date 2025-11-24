// Load Assignment model
const Assignment = require('../models/assignment');

// READ - List all assignments
exports.list = async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });
  res.render('assignments/list', {
    title: "All Assignments",
    assignments
  });
};

// Show Add Assignment form
exports.addForm = (req, res) => {
  res.render('assignments/add', { title: "Add Assignment" });
};

// ADD - Create new assignment
exports.add = async (req, res) => {
  await Assignment.create(req.body);
  res.redirect('/assignments');
};

// Show Edit Assignment form
exports.editForm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('assignments/edit', {
    title: "Edit Assignment",
    assignment
  });
};

// EDIT - Update assignment
exports.edit = async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/assignments');
};

// DELETE - Remove assignment
exports.delete = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
};
