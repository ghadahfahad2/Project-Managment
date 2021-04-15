import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
export default class TaskProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allTask: props.allTask,
        complete: props.complete,
    };
  }

  render() {
    const progress = (this.state.complete / this.state.allTask) * 100;
    // const progress = (this.state.complete.length / this.state.allTask.length) * 100;

    return (
      <div>
        <Progress
          percent={progress}
          width={7}
          theme={{
            success: {

              color: "rgb(223, 105, 180)",
            },
          }}
        />
      </div>
    );
  }
}
