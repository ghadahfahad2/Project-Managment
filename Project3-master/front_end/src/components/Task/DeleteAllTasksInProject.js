import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";

export default class DeleeAllTasksInProjet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
    };
  }
  componentDidMount = () => {
    this.deleteAllTask(this.state.projectId);
  };

  deleteAllTask = (id) => {
    return axios.delete(`${API_URL}project/${id}/tasks`);
  };
  render() {
    return <div></div>;
  }
}
