// Require necessary NPM packages
const express = require("express");
const Tasks = require("../../models/Tasks");
const User = require("../../models/Users.js");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
// const userId = "60115b690ba0311c388c9aa7";

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /projects
 * Description: Get the user's projects as manager or member
 */
//get all user tasks
router.get("/tasks/user/:id", (req, res) => {
  Tasks.find({ userId: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

router.get("/tasks/project/:id", (req, res) => {
  Tasks.find({ projectId: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

router.get("/allTasks/:id", (req, res) => {
  Tasks.find({ userId: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
