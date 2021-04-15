const express = require('express');
const projects = require('../../models/Projects.js');
const router = express.Router();


router.patch('/members/remove/:id', (req, res) => {
    projects.findByIdAndUpdate({ _id: req.params.id }, { $pull: { members: req.body } },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            console.log(result)
            throw "member has been removed"
        });
});

module.exports = router;
