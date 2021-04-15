// Require necessary NPM packages
const express = require('express');
const projects = require('../../models/Projects.js')
const Users = require('../../models/Users.js')

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//this user has two project: one as team member and another as manager his name: 'Najed'
// const userId = '60115b690ba0311c388c9aa8';
// const projectId = '6011b5dcd2af381b2c6a09b6';

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /members
 * Description: Get all members in specific project 
 */
//body syntax 
/**
 *   [
        {
            "role": "member",
            "_id": "6012b3064e0a54479c695191",
            "userId": "60115b690ba0311c388c9aa7"
        },
        {
            "role": "member",
            "_id": "6012b3064e0a54479c695192",
            "userId": "60115b690ba0311c388c9aa5"
        }
    ]
 */
//{ $push: { hates: { $each: ['alarm clocks', 'jackalopes'] } } }
// router.patch('/members/new/:id', (req, res) => {
//     Users.findOne({ userName: req.body.userName },
//         (err, result) => {
//             if (err) {
//                 console.log("the user not there ", err);
//             }
//             if (result) {
//                 console.log("the user there ", err);

//                 // console.log("the user is there", result)
//                 // projects.findByIdAndUpdate({ _id: req.params.id }, { $push: { members: { $each: req.body.members } } },
//                 //     (err, result) => {
//                 //         if (err) {
//                 //             console.log(err);
//                 //         }
//                 //         res.json({
//                 //             responseMessage: "The user is there",
//                 //             userDetails: result
//                 //         });
//                 //     });
//             } else if (result === null) {
//                 res.json("The user is not there");
//             }

//         });

//     // res.json("hii")
// });


router.patch('/members/new/:id', (req, res) => {
    projects.findByIdAndUpdate({ _id: req.params.id }, { $push: { members: req.body } },

        (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            console.log(result)
        });
    // res.json("hii")
});


router.post('/user/check', (req, res) => {
    // console.log(req.body);
    // console.log(req.params.userName);
    Users.findOne({ userName: req.body.userName },
        (err, result) => {
            if (err) {
                console.log("the user not there ", err);
                res.json({ responseMessage: "the user not there " })
            }
            if (result) {
                // projects.find({
                //     members: { $elemMatch: { userId: user_Id } }
                // },
                //     (err, result) => {
                //         if (err) {
                //             console.log(err);
                //             return false;
                //         }
                //         else {
                //             res.json({ message: "is already there", response: result });
                //             console.log(result)
                //             return true;
                //         }

                //     });

                // if (!checkUser(result._id)) {
                projects.findByIdAndUpdate({ _id: req.body.id }, { $push: { members: result._id } },
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json({ responseMessage: "SUCCESS", response: result });
                            console.log(result)
                        }

                    });
                // res.json("hii")
                // res.json({
                //     responseMessage: "The user is there",
                //     userDetails: result
                // });
                console.log("the user is there", result)
                // } else {
                //     res.json({ responseMessage: "The user is already there" });
                // }
            } else if (result === null) {
                res.json("The user is not there");
            }

        });
});

function checkUser(user_Id) {
    projects.find({
        members: { $elemMatch: { userId: user_Id } }
    },
        (err, result) => {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                res.json({ message: "is already there", response: result });
                console.log(result)
                return true;
            }

        });
    // res.json("hii")
}
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
