// Require necessary NPM packages
const express = require("express");
const User = require("../../models/Users.js");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /user/:id
 * Description: Get the user's Name by user id
 */


router.get('/user/check/:userName', (req, res) => {
  // console.log(req.body);
  console.log(req.params.userName);
  User.findOne({ userName: req.params.userName },
    (err, result) => {
      if (err) {
        console.log("the user not there ", err);
      }
      if (result) {
        res.json({
          responseMessage: "The user is there",
          userDetails: result
        });
        console.log("the user is there", result)
      } else if (result === null) {
        res.json("The user is not there");
      }

    });
});

//get all user tasks
router.get("/user/:id", (req, res) => {
  User.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
    console.log(result);
  });
});



module.exports = router;
