const Assignment = require('../models/assignment');

// READ
exports.list = async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });
  res.render('assignments/list', {
    title: "All Assignments",
    assignments
  });
};

// ADD FORM
exports.addForm = (req, res) => {
  res.render('assignments/add', { title: "Add Assignment" });
};

// ADD
exports.add = async (req, res) => {
  await Assignment.create(req.body);
  res.redirect('/assignments');
};

// EDIT FORM
exports.editForm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('assignments/edit', {
    title: "Edit Assignment",
    assignment
  });
};

// EDIT
exports.edit = async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/assignments');
};

// DELETE
exports.delete = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
};
