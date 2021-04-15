import React, { Component } from "react";
import "../form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>

                <Route exact path="/" component={()=> <Login loginHandler={this.props.loginHandler}/>} />
                <Route path="/sign-in" component={()=> <Login loginHandler={this.props.loginHandler}/>} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}