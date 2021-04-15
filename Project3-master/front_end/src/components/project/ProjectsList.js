import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projecs_list: [],
      userId: props.userId
    };

    // this.getProjectDetails = this.getProjectDetails.bind(this)
  }
  componentDidMount = () => {
    this.getAllProject();
  };
  getAllProject = () => {
    axios
      .get(`${API_URL}/projects/${this.state.userId}`)
      .then((res) => {
        this.setState({ projecs_list: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  getProjectDetails = (projectId) => {
    return (
      <ProjectDetails projectId={projectId} />
    )
  }
  render() {
    // console.log(this.state.projecs_list);
    const showAllProjectsList = this.state.projecs_list.map((projects) => {
      console.log(projects._id);
      return (
        <div className='projectList'>
          <p><Link to={{ pathname: `/project/details/${projects._id}`, state: { projectDetils: projects, userLoggedInId: this.state.userId  } }} onClick={() => this.getProjectDetails(projects._id)} >{projects.title}
          </Link></p>
          {/* <p >{projects.title}</p> */}
          {/* <p>member: {projects.members.length}</p> */}
          {/* <p>{ task}</p> */}
          {/* {proresspar} */}
        </div>
      );
    });
    return <div className="ProjectsList">{showAllProjectsList}</div>;
  }
}

export default ProjectsList;
