// Require necessary NPM packages
const mongoose = require('mongoose');
const { isEmail } = require('validator');

// Define Article Schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  
});

// Compile our Model based on the Schema
const User = mongoose.model('User', userSchema);

// Export our Model for use
module.exports = User;
