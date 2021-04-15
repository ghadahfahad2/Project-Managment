// Require necessary NPM packages
const express = require("express");
const projects = require("../../models/Projects.js");
const Users = require("../../models/Users.js");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
const userId = "60115b690ba0311c388c9aa8";
const projectId = "6011b5dcd2af381b2c6a09b6";

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /members
 * Description: Get all members in specific project with role = 'manager'
 */
router.get("/members", (req, res) => {
  projects.findOne(
    {
      members: { $elemMatch: { userId: userId, role: "manager" } },
      _id: projectId,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
      console.log(result);
    }
  );
});
/* Description: Get all members in specific project */
router.get("/member/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});

router.get("/users", (req, res) => {
  Users.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});
//User.findOne({'local.rooms': {$elemMatch: {name: req.body.username}}}, function (err, user) {

// router.post('/signIn', (req, res) => {
//     users.create(req.body)
//     users.find({}, (err, result) => {
//         if (err) {
//             res.json("error :(")
//         }
//         res.json(result);
//     })
// });

// Export the Router so we can use it in the server.js file
module.exports = router;
