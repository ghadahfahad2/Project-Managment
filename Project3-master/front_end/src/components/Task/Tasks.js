import React, { Component } from "react";

import API_URL from "../../ApiConfig";
import axios from "axios";
import UpdateTask from "./UpdateTask";
import UpdateTaskStatus from './UpdateTaskStatus'
import DeleteTask from "./DeleteTask";
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: props.projectId,
      userId: props.userId,
      allProjectTasksDetails: [],
    };
  }
  componentDidMount = () => {
    this.getAllProjectTasks();
  };
  toUpdate = (updates) => {
    const allTasks = updates.map((update) => {
      const allProjectTasksDetails = this.state.allProjectTasksDetails;
      update.isUpdate = false;
      update.isDelete = false;
      allProjectTasksDetails.push(update);
      this.setState({ allProjectTasksDetails });
    });
  };
  getAllProjectTasks = () => {
    axios
      .get(`${API_URL}/tasks/project/${this.state.projectId}`)
      .then((res) => {
        this.toUpdate(res.data);
      });
  };
  update = (task) => {
    task.isUpdate = true;
    this.setState({ task });
  };
  delete = (task) => {
    console.log(task);
    task.isDelete = true;
    this.setState({ task });
  };
  status = (task) => {
    console.log(task);
    task.status = true;
    this.setState({ task });
    <UpdateTaskStatus UpdateTaskStatus={task} />
  };
  render() {
    const allProjectTasksDetails = this.state.allProjectTasksDetails;
    const retorninfo =
      allProjectTasksDetails.length === 0
        ? ""
        : allProjectTasksDetails.map((task, index) => {
          console.log(task);
          if (task.isUpdate === true) {
            return (
              <UpdateTask
                taskId={task._id}
                teamMember={this.props.teamMember}
                userId={task.userId}
                title={task.title}
                projectId={task.projectId}
                status={task.status}
              />
            );
          } else if (task.isDelete === true) {
            return <DeleteTask taskId={task._id} />;
          } else {
            <td>{this.props.memberName}</td>;
            if (task.userId === this.state.userId) {
              // return <p>{task.title}</p>; <td>{task.userId}</td>
              return (
                <>
                  
                    <td>
                      <p>{task.title}</p>
                    </td>
                 
                    <td><div
                      className="memberList"
                      onClick={() => this.status(task)}
                    ><i className="fa fa-check-square"></i></div></td>
                 
                  {this.props.isUserLoggedInManager ? (
                    
                      <td>
                        <div
                          className="memberList"
                          onClick={() => this.delete(task)}
                        >
                          <i className="fa fa-trash"></i>
                        </div>
                      </td>
                    

                  ) : (
                      <td></td>
                    )}
                  {this.props.isUserLoggedInManager ? (
                   
                      <td>
                        <div
                          className="memberList"
                          onClick={() => this.update(task)}
                        >
                          <i className="fa fa-edit"></i>
                        </div>
                      </td>
                   
                  ) : (
                      
                        <td></td>
                      
                    )}
                </>
              );
            }
          }
        });

    return <div>{retorninfo}</div>;
  }
}

export default Tasks;
