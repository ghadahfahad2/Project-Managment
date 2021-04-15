import React, { Component } from "react";
import { BrowserRouter as Router, Route, Swich, Link } from "react-router-dom";
import CreateNewproject from "./project/CreateNewproject";
import ProjectsList from "./project/ProjectsList";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>welcome</h1>{" "}
        
        <Link
          to={{
            pathname: "/newProject",
            state: {
              userId: this.props.userId,
            },
          }}
        // className="fa fa-file-text-o icon-wrapper project-name items"
        >
          <p className="pragraphNewProject">New Project</p>
        </Link>
        <p className='line'>My Project</p>
        <ProjectsList userId={this.props.userId} />
=
      </div>
    );
  }
}
