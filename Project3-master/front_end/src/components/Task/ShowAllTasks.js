import React, { Component } from "react";
import API_URL from "../../ApiConfig";
import axios from "axios";
import { Table, Form} from "react-bootstrap";

class ShowAllTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: props.projectId,
      userId: props.userId,
      allTasks: "",
    };
  }
  componentDidMount = () => {
    this.getAllProjectTasks();
  };

  getAllProjectTasks = () => {
    axios
      .get(`${API_URL}/allTasks/${this.state.userId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ allTasks: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    // return (<td>this.state.memberDetails.userName</td>)
  };
  render() {
    const allTasks = this.state.allTasks;
    const allMemberTasks =
      allTasks.length === 0
        ? ""
        : allTasks.map((task, index) => {
            if (task.userId === this.state.userId) {
              console.log(task.title);
              return (
                <tr>
                  <td>
                  <Form.Check type="checkbox"  />
                  </td>
                  <td>{task.title}</td>
                </tr>
              );
            }
          });
    return (
      // <div>
      //     {allMemberTasks}
      // </div>
      <div className="taskTable">
      <Table striped borderless hover size="sm">
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{allMemberTasks}</tbody>
      </Table>
      </div>
    );
  }
}

export default ShowAllTasks;
