import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../../App.css";
import Apiconfig from "../../ApiConfig";
import "font-awesome/css/font-awesome.min.css";
import {
  BrowserRouter as Router,
  Route,
  Swich,
  Link,
  Redirect,
} from "react-router-dom";
export default class CreateNewproject extends Component {
  constructor(props) {
    super(props);
    //projects
    this.state = {
      title: "",
      role: "",
      startDate: "",
      endDate: "",
      status: "",
      userName: "",
      temporaryMembersListForDb: [
        {
          userId: props.location.state.userId,
          role: "manager",
        },
      ],
      temporaryMembersList: [],
      member: "",
    };
  }
  //after user Submit the data
  onSubmit = (e) => {
    /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
    e.preventDefault();
    //do not need to refresh the page after user submit it must be forward into home page    event.preventDefault()
    //we need to send that into back end all data from front into back end by axios
    const newProject = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      members: this.state.temporaryMembersListForDb
    };
    //we need to post that data into server
    //post registered to this endPoint which back end (Schema) - to MongoDB
    axios.post(`${Apiconfig}/project/new`, newProject).then((res) => {
      alert("Project added successfully");
      console.log("Project Data:", newProject);
      this.setState({ redirect: true });
    });
  };
  //Add user into Project
  AddUser = (e) => {
    /*The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.*/
    e.preventDefault();
    const memberUserName = { userName: this.state.userName };
    //check if input feild empty
    if (memberUserName.userName === "") {
      alert("No member Selected");
    } else {
      // let copyMembers = [...this.state.members]
      axios
        .get(`${Apiconfig}/user/check/${this.state.userName}`, memberUserName)
        .then((res) => {
          if (res.data.responseMessage === "The user is there") {
            console.log("The user data", res.data.userDetails);
            const temporaryMembersListForDb = this.state.temporaryMembersListForDb.slice();
            const membersIndex = temporaryMembersListForDb.findIndex(
              (item) => item.userId === res.data.userDetails._id
            );
            console.log(membersIndex);
            membersIndex > -1
              ? alert("the user already added")
              : this.setState({
                member: res.data.userDetails,
                temporaryMembersList: this.state.temporaryMembersList.concat(
                  res.data.userDetails
                ),
              });
            // alert(this.state.userName + 'added successfully')
            // copyMembers.push(this.state.userName)
            // this.setState({ members: copyMembers })
            console.log(res.data.userDetails._id);
            // this.state.members.map(m =>{
            //     console.log(m);
            // })
            this.AddMember();
          } else {
            alert(res.data);
          }
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //updateProject
  updateProject = () => {
    axios
      .put(`${Apiconfig}/addMembers/${this.state.title}`, {
        members: this.state.temporaryMembersList,
      })
      .then((res) => {
        console.log(res);
      });
  };
  AddMember = () => {
    const memebr = {
      userId: this.state.member._id,
      role: "member",
    };
    console.log("memebr", memebr);
    const temporaryMembersListForDb = this.state.temporaryMembersListForDb.slice();
    const membersIndex = temporaryMembersListForDb.findIndex(
      (item) => item.userId === memebr.userId
    );
    console.log(membersIndex);
    membersIndex === -1
      ? temporaryMembersListForDb.push(memebr)
      : console.log("the user already added");
    this.setState({ temporaryMembersListForDb });
    // console.log("object");
    // this.setState({
    //     temporaryMembersList: getTemporaryMembersList.concat({
    //         userId: this.state.member._id
    //     }),
    //     member: ''
    // })
    console.log(this.state.temporaryMembersListForDb);
    // const membersList = this.state.temporaryMembersList;
    // console.log(membersList);
  };
  removeMember = (member) => {
    // console.log(member);
    const temporaryMembersList = this.state.temporaryMembersList.slice();
    // console.log(temporaryMembersList);
    const membersIndex = temporaryMembersList.findIndex(
      (item) => item.userName === member.userName
    );
    // console.log("index:", membersIndex)
    membersIndex > -1
      ? temporaryMembersList.splice(membersIndex, 1)
      : console.log("not there");
    // console.log(temporaryMembersList);
    const temporaryMembersListForDb = this.state.temporaryMembersListForDb.slice();
    // console.log(typeof memebr);
    const memberIndex = temporaryMembersListForDb.findIndex(
      (item) => item.userId === member._id
    );
    // console.log("memberIndex", memberIndex);
    memberIndex > -1
      ? temporaryMembersListForDb.splice(memberIndex, 1)
      : console.log("the user already added");
    this.setState({
      temporaryMembersList,
      temporaryMembersListForDb,
    });
    // console.log(temporaryMembersListForDb);
    // console.log(temporaryMembersList);
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const membersList = this.state.temporaryMembersList;
    // console.log(membersList);
    const showList =
      membersList.length !== 0
        ? membersList.map((member, index) => {
          return (
            <div className="memberList list-group-item">
              <p>{member.userName}</p>
              <a href="#">
                <i
                  class="fa fa-trash"
                  onClick={() => this.removeMember(member)}
                ></i>
              </a>
            </div>
          );
        })
        : "No members";
    // console.log(this.state.temporaryMembersList);
    return (
      <div>
        <div className="card">
          <h3 className="card-header">New Project</h3>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="ProjectName">Project Name </label>
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({
                      title: e.target.value,
                    });
                  }}
                  value={this.state.title}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="startDate ">Start Date</label>
                <input
                  type="date"
                  name="start date"
                  onChange={(e) => {
                    this.setState({
                      startDate: e.target.value,
                    });
                  }}
                  value={this.state.startDate}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="EndDate">End Date</label>
                <input
                  type="date"
                  name="end date"
                  onChange={(e) => {
                    this.setState({
                      endDate: e.target.value,
                    });
                  }}
                  value={this.state.endDate}
                  className="form-control"
                />
              </div>
              <div className="card-footer">
                <form>
                  <h4>Add Project Team</h4>
                  <label for="addUser">User Name</label>
                  <div className="form-inline mx-sm-3 mb-2">
                    <input
                      type="text"
                      onChange={(e) => {
                        this.setState({
                          userName: e.target.value,
                          member: "",
                        });
                      }}
                      value={this.state.userName}
                      className="form-control"
                    />{" "}
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="Add"
                      onClick={this.AddUser}
                    />
                  </div>
                  {/* {this.state.member !== '' ?
                            <div>
                                <span>{this.state.userName}</span>
                                {/* <input className="btn btn-danger btn-black" value="add" onClick={this.AddMember} /> */}
                  {/* </div> */}
                  {/* : null} */}
                  <div class="list-group">
                    {showList == "No members" ? null : showList}
                  </div>
                </form>
                <div className="card-footer">
                  <Link to="/" className="btn btn-default">
                    Cancel
                  </Link>
                  <input
                    type="submit"
                    className="btn btn-danger btn-black"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* <input
                        type="submit"
                        className="btn btn-danger btn-black"
                        value="Update Project" onClick={this.updateProject}
                    /> */}
        </div>
      </div>
    );
  }
}
