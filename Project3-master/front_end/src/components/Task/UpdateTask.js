import React, { Component } from "react";
import axios from "axios";
import API_URL from "../../ApiConfig";
import Members from "../Member/Members";
import DeleteAllTasksToUser from "./DeleteAllTasksToUser"

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: props.taskId,
      title: props.Title,
      userId: props.userId,
      projectId: props.projectId,
    };
  }


  updateTask = (event) => {
    event.preventDefault();
    axios
      .patch(`${API_URL}/tasks/${this.state.taskId}`, this.state)
      .then((res) => {
        console.log("Response Data:", res.data);
//         if (window.confirm(`update this Task?`)) {
//           this.deleteTaskByID(this.state.taskId);
//         }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

  };
  handleChange = (e) => {
    this.setState({ userId: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.updateTask}>
          <>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
                value={this.state.title}
                className="form-control-from-group"
                defaultValue={this.state.title}
              />
            </td>

            <td>
              <select onChange={this.handleChange}>
                {this.props.teamMember.map((memberName) => (
                  <Members
                    value={this.state.userId}
                    userId={memberName.userId}
                    option={true}
                  />
                ))}
              </select>
            </td>

            {/* <button onClick={<DeleteAllTasksToUser userId={this.state.userId} />}>delete All</button> */}

            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Submit"
            />
          </>

        </form>
      </div>
    );
  }
}

export default UpdateTask;
