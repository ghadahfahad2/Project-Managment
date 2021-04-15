import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Members from "../Member/Members";
import "font-awesome/css/font-awesome.min.css";
import "../../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Tasks from "../Task/Tasks";
import AddMembers from "../Member/AddMembers";
import DeletProject from "./DeletProject";
import CreateNewTask from "../Task/CreateNewTask";
class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projecsDetails: props.location.state.projectDetils,
      userLoggedInId: props.location.state.userLoggedInId,
      showAddMemberForm: false,
      showAddTaskForm: false,
    };
  }
  deleteMember = (index) => {
    console.log("delete btn clicked");
    <DeletProject projectId={this.state.projecsDetails._id} />;

  };
  updateMember = (index) => {
    console.log("update btn clicked");
  };

  showAddMemberForm = () => {
    this.setState({ showAddMemberForm: true });
    console.log(this.state.showAddMemberForm);
  };
  showAddTaskForm = () => {
    this.setState({ showAddTaskForm: true });
  };
  render() {
    let isUserLoggedInManager = false;
    let managerName = "";
    const getDetails = this.state.projecsDetails.members;
    const showAllProjectsDetails =
      getDetails !== undefined
        ? getDetails.length !== 0
          ? getDetails.map((member) => {
            if (
              member.userId === this.state.userLoggedInId &&
              member.role === "manager"
            ) {
              isUserLoggedInManager = true;
              managerName = <Members userId={member.userId} />;
            }
            return (
              <tr>
                <Members userId={member.userId} />
                <Tasks
                  userId={member.userId}
                  projectId={this.state.projecsDetails._id}
                  isDelete={false}
                  teamMember={this.state.projecsDetails.members}
                  isUserLoggedInManager={isUserLoggedInManager}
                />
              </tr>)
          })

          : ""
        : "";

    var startDate = new Date(this.state.projecsDetails.startDate);
    var dd = String(startDate.getDate() + 1).padStart(2, "0");
    var mm = String(startDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = startDate.getFullYear();

    startDate = yyyy + "-" + mm + "-" + dd;

    var endtDate = new Date(this.state.projecsDetails.endDate);
    var dd = String(endtDate.getDate() + 1).padStart(2, "0");
    var mm = String(endtDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = endtDate.getFullYear();

    endtDate = yyyy + "-" + mm + "-" + dd;
    console.log(this.state.userLoggedInId);

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>{this.state.projecsDetails.title}</h3>
            {isUserLoggedInManager ? (
              <div>
      //call delete methhod 
                  <i className="fa fa-trash">
                  </i>
                {isUserLoggedInManager ? (
                  <Link
                    to={{
                      pathname: "/project/update",
                      state: {
                        id: this.state.projecsDetails._id,
                        title: this.state.projecsDetails.title,
                        startDate: startDate,
                        endDate: endtDate,
                        userLoggedInId: this.props.location.state.userLoggedInId

                      },
                    }}
                  >
                    <i className="fa fa-edit"></i>
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="card-body">
            {/* <p>{this.state.projecsDetails.startDate}</p> */}
            <div className="details">
              <p>Start Date: {startDate}</p>
              <p>End Date: {endtDate}</p>
              <p>Manager: {managerName}</p>
            </div>
            {/* {this.state.showAddMemberForm ? (<></>
              // <AddMembers
              //   projectId={this.state.projecsDetails._id}
              //   showAddMemberForm={this.showAddMemberForm}
              // />
            ) : (
                <button
                  className="btn btn-danger"
                  onClick={() => this.showAddMemberForm(true)}
                >
                  Add Member
                </button>
              )} */}
            {isUserLoggedInManager ? (
              this.state.showAddTaskForm ? (
                  <CreateNewTask
                    teamMember={this.state.projecsDetails.members}
                    projectId={this.state.projecsDetails._id}
                  />
                ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => this.showAddTaskForm()}
                    >
                      Add Task
                    </button>
                  )
              ) : ''}

            <table className="table">
              <tr>
                <th>Team Members</th>
                <th>Tasks</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
              {showAllProjectsDetails}
            </table>
          </div>
        </div>
      </div >

    );
  }
}

export default ProjectDetails;
