// Require necessary NPM packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//test code -------------------------------

const {
  usersData,
  projectsData,
  oneProject,
  TasksData,
} = require("./models/SeedData");

//test code -------------------------------

// Require File
const db_url = require("./db");
const projects = require("./models/Projects");
const User = require("./models/Users.js");
const Tasks = require("./models/Tasks.js");

module.exports = mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
  Tasks.create(TasksData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
    // User.create(usersData, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    // projects.create(oneProject, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    // console.log(projectsData[0].members);
});
