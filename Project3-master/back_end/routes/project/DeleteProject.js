const express = require("express");
const projects = require("../../models/Projects.js");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
// const projectid = "601438f5c9ea422b68371d43";
/**
 * Action:      Delete
 * Method:      Delete
 * URI:         /project/id/
 * Description: Update an esisting project status, Date and/or title
 */


router.delete("/project/:id", (req, res) => {
  projects.findByIdAndDelete({ _id: req.params.id }, (error, result) => {
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
