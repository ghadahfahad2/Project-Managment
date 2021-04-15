// Require necessary NPM packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    members: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        role: {
            type: String,
            default: 'member'
        }
    }],
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date
    },
    status: {
        type: Boolean,
        default: false
    }
})
// Compile our Model based on the Schema
const projects = mongoose.model("Project", projectsSchema);

// Export our Model for use
module.exports = projects
