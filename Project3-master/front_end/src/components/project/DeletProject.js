import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import DeleteAllTasksInProject from "../Task/DeleteAllTasksInProject";
export default class DeletProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
    };
  }
  componentDidMount = () => {
    if (window.confirm(`Delete this project?`)) {
      this.deleteProjectByID(this.state.projectId);
      <DeleteAllTasksInProject projectId={this.state.projectId} />;
    }
  };
  deleteProjectByID = (id) => {
    return axios.delete(`${API_URL}/project/${id}`);
  };
  render() {
    return <></>;
  }
}
