import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Apiconfig from "../ApiConfig";
import { Redirect } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }
  onSubmit = (event) => {
    event.preventDefault();

    const loginInfo = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post(`${Apiconfig}/login`, loginInfo).then((res) => {
      console.log("Response Data:", res.data, res.data._id);

      if (typeof res.data === 'object') {
        // this.setState({ userId: res.data._id, isLogged:true });
        this.props.loginHandler(res.data);
        console.log("Correct email and password");
      }
      if (res.data === "Password is not correct") {
        console.log("Wrong Password");
      }
      if (res.data === "Email does not exist") {
        console.log("Email does not exist");
      }
    });
   
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    console.log(this.state.email);
  };
  getPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  };

//   render() {
//     return (
//       <>
//         {this.props.isLogged ? (
//           <Redirect to="/" />
//         ) : (
//           <div>
//             <div className="form-div">
//               <form onSubmit={this.onSubmit}>
//                 <h3>Sign In</h3>
//                 <label>Email address</label> <br />
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email "
//                   onChange={(e) => {
//                     this.getEmail(e);
//                   }}
//                   value={this.state.email}
//                   className="form-control"
//                 />
//                 <br />
//                 <label>Password</label>
//                 <br />
//                 <input
//                   type="password"
//                   placeholder="Password "
//                   onChange={(e) => {
//                     this.getPassword(e);
//                   }}
//                   value={this.state.password}
//                   className="form-control"
//                 />
//                 <br />
//                 <br />
//                 <input
//                   type="submit"
//                   className="btn btn-danger btn-black"
//                   value="Log in"
//                 />
//               </form>
//             </div>
//           </div>

  
  render() {
    return (
      <>
      {this.props.isLogged ? (
        <Redirect to="/"/>
      ) : (
      <div>
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <h3>Sign In</h3>
            <label>Email address</label> <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email "
              onChange={(e) => {
                this.getEmail(e);
              }}
              value={this.state.email}
              className="form-control-from-group"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password "
              onChange={(e) => {
                this.getPassword(e);
              }}
              value={this.state.password}
              className="form-control-from-group"
            />
            <br />
            <br />
            <input
              type="submit"
              className="btn btn-danger btn-black"
              value="Log in"
            />
          </form>
        </div>
      </div>
        )}
      </>
    );
  }
}