const express = require("express");
const Tasks = require("../../models/Tasks");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
// const projectid = "601438f5c9ea422b68371d43";
/**
 * Action:      Delete
 * Method:      Delete
 * URI:         /project/id/
 * Description: Update an esisting project status, Date and/or title
 */

//delete exist task in exist project
router.delete("/tasks/:id", (req, res) => {
  Tasks.findByIdAndDelete({ _id: req.params.id }, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("DELETE SUCCESS");
      res.json(result);
    }
  });
});

//delete all task for spicific member
router.delete("/project/:id/tasks", (req, res) => {
  Tasks.deleteMany({ projectId: req.params.id }, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("DELETE SUCCESS");
      res.json(result);
    }
  });
});
//delete all task in exist project
router.delete("/tasks/user/:id", (req, res) => {
  Tasks.deleteMany({ userId: req.params.id }, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("DELETE SUCCESS");
      res.json(result);
    }
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
