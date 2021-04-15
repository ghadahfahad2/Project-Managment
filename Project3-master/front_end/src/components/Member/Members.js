import React, { Component } from "react";
import axios from "axios";
import API_URL from "../../ApiConfig";
class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      memberDetails: {},
      managerId: "",
    };
  }
  componentDidMount() {
    this.getAllmembers(this.state.userId);
  }
  getAllmembers = (userId) => {
    axios
      .get(`${API_URL}/member/${userId}`)
      .then((res) => {
        this.setState({ memberDetails: res.data });
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    // return (<td>this.state.memberDetails.userName</td>)
  };

  render() {
    const isOption = this.props.option ? (
      <option value={this.props.userId} className="Members">
        {this.state.memberDetails.userName}
      </option>
    ) : (
        <td>{this.state.memberDetails.userName}</td>
      );
    return <>{isOption} </>;
  }
}
export default Members;

