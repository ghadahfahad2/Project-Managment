const express = require('express');
const router = express.Router();
const User = require("../models/Users");
//SignUp request to create a user dependent in schema
router.post('/signUp', async (req, res) => {
  console.log('/signUp');
  //to add new user into DB
  const signedUpUser = new User({
    //cheack in post man ---DONE
    //userName field grap the user name from the body request which  mean the user name that write it by user in input form
    userName: req.body.userName,
    //grap the email that user enter in body req (when the user enter into submit)
    email: req.body.email,
    //grap the email that user enter in body req (when the user enter into submit)
    password: req.body.password
  });
  let userExisit = await verifyUser(req)
  if (userExisit) {
    //prevent
    res.send('Already Exist')   //to go outside function
    return;
  }
  //we need to save it
  signedUpUser.save()
    .then(data => {
      res.json(data)
    }).catch(error => {
      res.json(error)
    })
})
async function verifyUser(req) {
  try {
    const userExisit = await User.findOne({ email: req.body.email });
    return userExisit;
    // next();
  } catch (error) {
    //handle exceptions here
  }
}
// Export the Router so we can use it in the server.js file
module.exports = router;