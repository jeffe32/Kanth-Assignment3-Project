const Assignment = require('./models/assignment');

// List all assignments
exports.list = async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });

  res.render('assignments/list', {
    title: "All Assignments",
    assignments
  });
};

// Show form to add
exports.addForm = (req, res) => {
  res.render('assignments/add', { title: "Add Assignment" });
};

// Add new assignment
exports.add = async (req, res) => {
  await Assignment.create(req.body);
  res.redirect('/assignments');
};

// Show edit form
exports.editForm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  res.render('assignments/edit', {
    title: "Edit Assignment",
    assignment
  });
};

// Update assignment
exports.edit = async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/assignments');
};

// Delete assignment
exports.delete = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
};
