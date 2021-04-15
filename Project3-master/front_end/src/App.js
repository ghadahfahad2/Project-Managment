import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Forms from "./components/Forms";

export default class App extends Component {
constructor() {
    super();
    //signUp faild
    this.state = {
      user: {},
      isLogged: false,

    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  loginHandler = (userInfo) => {
    // const userId = this.state.userId;
    this.setState({ user: userInfo, isLogged: true });
  };

  logOut = () => {
    this.setState({ isLogged: false, user: {} });

  };

 
  render() {
    
    return (
      <>
        {this.state.isLogged ? (
          <div >
            <Sidebar
            
              userId={this.state.user._id}
              isLogged={this.props.isLogged}
              userName={this.state.user.userName}
              isLogged={this.state.isLogged}
              logOut={this.logOut}
            />
          </div>
        ) : (
          <div>
            <div>
              <div>
                <Forms loginHandler={this.loginHandler} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}