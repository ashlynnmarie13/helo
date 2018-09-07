import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../../ducks/reducer";

class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  createUser() {
    axios
      // Sending user's data to backend
      .post("/api/users/register", {
        username: this.state.username,
        password: this.state.password
      })

      .then(user => {
        const { username, userid, profilepic } = user.data;

        this.props.addUser(username, userid, profilepic);
      });

    //after the response comes back, navigate to dashboard
    this.props.history.push("/dashboard");
  }

  loginUser() {
    axios
      .post("/api/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(user => {
        const { username, userid, profilepic } = user.data;

        this.props.addUser(username, userid, profilepic);
      });
    this.props.history.push("/dashboard");
  }

  inputHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        Username
        <input
          onChange={e => this.inputHandle(e)}
          type="text"
          name="username"
          placeholder="username"
        />
        Password
        <input
          onChange={e => this.inputHandle(e)}
          type="password"
          name="password"
          placeholder="password"
        />
        <button onClick={() => this.loginUser()}>Login</button>
        <button onClick={() => this.createUser()}>Register</button>
      </div>
    );
  }
}

//invoking connect for redux

export default connect(
  null,
  {
    addUser
  }
)(Auth);
