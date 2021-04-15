// Require necessary NPM packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Task schema
const TaskSchema = new mongoose.Schema({
  title: String,
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: Boolean,
});

// Create model from the Task schema
const Task = mongoose.model("Task", TaskSchema);

// Export our Model for use
module.exports = Task;
