import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";

export default class DeleteTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: props.taskId,
    };
  }
  componentDidMount = () => {
    if (window.confirm(`Delete this Task?`)) {
      this.deleteTaskByID(this.state.taskId);
    }
  };
  deleteTaskByID = (id) => {
    return axios.delete(`${API_URL}/tasks/${id}`);
  };
  render() {
    return <div></div>;
  }
}
