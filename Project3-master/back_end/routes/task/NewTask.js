// Require necessary NPM packages
const express = require("express");
// const projects = require("../models/Projects");
// const Users = require("../models/Users");
const Tasks = require("../../models/Tasks");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'

/**
 * Action:      CREATE
 * Method:      POST
 * URI:         /project/:id/tasks
 * Description: Get the user's projects as manager or member
 */
router.post("/project/tasks", (req, res) => {
  //Miss some steps
  //1. get project id
  //2. get user id ==> ddl all member
  //3. set a new task for user
  Tasks.create(req.body, (err, result) => {
    if (err) {
      res.json("error :(");
      console.log(err);
    }
    res.json(result);
  });
  console.log("result");
});

router.post("/projects/:id/tasks", (req, res) => {
  //Miss some steps
  //1. get project id
  //2. get user id ==> ddl all member
  //3. set a new task for project
  Tasks.create(req.body, (err, result) => {
    if (err) {
      res.json("error :(");
    }
    res.json(result);
  });
  console.log("result");
});

// Export the Router so we can use it in the server.js file
module.exports = router;
