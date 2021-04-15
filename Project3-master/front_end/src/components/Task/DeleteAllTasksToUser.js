import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";

export default class DeleteAllTasksToUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
    };
  }
  componentDidMount = () => {
    if (window.confirm(`Delete All task?`)) {

      this.deletetaskByuserID(this.state.userId);
    }
  };
  deletetaskByuserID = (id) => {
    return axios.delete(`${API_URL}/tasks/user/${id}`);
  };
  render() {
    return <div></div>;
  }
}
