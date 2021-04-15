import React, { Component } from "react";
import axios from 'axios'
import API_URL from '../../ApiConfig'
export default class UpdateProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
      status: props.status,
    };
  }
  componentDidMount = () => {
    this.updateProjectStatus(this.state.projectid);

  };
  updateProjectStatus = (id) => {
    axios.patch(`${API_URL}/project/${id}`, this.state.status).then((res) => {
      console.log("Response Data:", res.data);
      this.setState({});
    });
  };
  render() {
    return <div></div>;
  }
}
