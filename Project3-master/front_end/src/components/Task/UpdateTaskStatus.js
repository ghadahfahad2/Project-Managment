import React, { Component } from "react";
import axios from "axios";
import API_URL from "../../ApiConfig";
import UpdateProjectStatus from "../project/UpdateProjectStatus";
import TaskProgressBar from './TaskProgressBar'
class UpdateTaskStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasksDetails: props.allTasksDetails,
      complete:[]

    };
  }
  componentDidMount = () => {
    this.updateOneTaskStat();
  };
  updateOneTaskStat = (event) => {
    event.preventDefault();
    const complete = this.state.complete;

    axios
      .patch(
        `${API_URL}/tasks/${this.state.allTasksDetails._id}`,
        this.state.allTasksDetails.status
      )
      .then((res) => {
        console.log("Response Data:", res.data);

                  complete.push(res.data)
this.setState({complete})
        this.checkAllTask();
      })
    

  };
  checkAllTask = () => {
    this.state.allTasksDetails.every((taskstatus) => {
      taskstatus.status === true ? (
        <UpdateProjectStatus status={true} pojectId={this.state.projectId} />
      ) : (
        console.log("uncomplate")
      );
    });
        <TaskProgressBar allTask = {this.state.allTasksDetails.length} complete={this.state.complete.length}/>;
  };
  render() {
  
    return <div></div>;
  }
}

export default UpdateTaskStatus;
