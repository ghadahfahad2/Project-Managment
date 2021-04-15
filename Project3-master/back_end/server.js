// Require necessary NPM packages
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// Require DB Configuration File
const db_url = require("./db");
const projects = require("./models/Projects");
const users = require("./models/Users.js");

const projectRouter = require("./routes/project/Projects");
const newProjectRouter = require("./routes/project/NewProject");
const updateProjectRouter = require("./routes/project/UpdateProject");
const membersInProjectRouter = require("./routes/project/Members");
const deleteProjectRouter = require("./routes/project/DeleteProject");
const addNewMember = require("./routes/project/AddNewMember");
const removeMember = require("./routes/project/RemoveMember");

const userRouter = require("./routes/user/users");
const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/SignUp");

//Task Router
const NewTaskRouter = require("./routes/task/NewTask");
const TasksRouter = require("./routes/task/Tasks");
const updateTasksRouter = require("./routes/task/UpdateTask");
const deleteTaskRouter = require("./routes/task/DeleteTasks");
// const removeMember = require("./routes/project/RemoveMember");

//Make sure to add to your whitelist any website or APIs that connect to your backend.
var whitelist = [`http://localhost:${PORT}`, "https://project-managment-sei-14.herokuapp.com"];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));

//must change your port to this for deployment else it wont work




// Establish Database Connection
mongoose.connect(process.env.MongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
// Instantiate Express Application Object



// The method `.use` sets up middleware for the Express application
app.use(express.json());
const reactPort = 3000;

// Set CORS headers on response from this API using the `cors` NPM package.
// app.use(
//   cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
// );

/*** Routes ***/
// Mount imported Routers
// app.use(indexRouter);
app.use('/api', loginRouter);
app.use('/api', newProjectRouter);
app.use('/api', membersInProjectRouter);
app.use('/api', projectRouter);
app.use('/api', signUpRouter);
app.use('/api', updateProjectRouter);
app.use('/api', deleteProjectRouter);
app.use('/api', addNewMember);
//Task imorted routers

app.use('/api', NewTaskRouter);
app.use('/api', TasksRouter);
app.use('/api', updateTasksRouter);
app.use('/api', deleteTaskRouter);
app.use('/api', userRouter);
app.use('/api', removeMember);

// app.use('/api',removeMember);


//serves all our static files from the build directory.
app.use(express.static(path.join(__dirname, "build")));

// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
/*** Routes ***/
// Define PORT for the API to run on
// const PORT = process.env.PORT || 5000;
// // Start the server to listen for requests on a given port
// app.listen(PORT, () => {
//   console.log(`project_managment PORT => :${PORT}`);
// });
/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
