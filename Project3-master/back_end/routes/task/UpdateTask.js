// Require necessary NPM packages
const express = require("express");
const Tasks = require("../../models/Tasks");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
/**
 * Action:      UPDATE
 * Method:      PATCH
 * URI:         /project/id/
 * Description: Update an esisting project status, Date and/or title
 */

//update exsist task in exsist project

router.patch("/tasks/:id", (req, res) => {
  Tasks.findByIdAndUpdate({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      console.log(error);
      res.json({ error: "(" });
    }
    console.log(req.body);
    res.json(result);
  });
});

// update member
// router.patch("/tasks/:id/user", (req, res) => {
//   projects.findByIdAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     (error, result) => {
//       if (error) {
//         console.log(error);
//         res.json({ error: "(" });
//       }
//       console.log(req.body);
//       res.json(result);
//     }
//   );
// });
// Export the Router so we can use it in the server.js file
module.exports = router;
