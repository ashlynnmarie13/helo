import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../../ducks/reducer";

class Auth extends Component {
  //why is there no constructor here? and why state and not this.state?
  state = {
    username: "",
    password: ""
  };

  createUser() {
    axios
      // whatever data you want to SEND from here is going to go inside the
      // .post with curly brackets
      .post("/api/users/register", {
        username: this.state.username,
        password: this.state.password
      })
      // after you pass it in you do curly braces
      // here we're getting addUser from redux and using it to add a user
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

  //memorize this syntax.... hahahaha
  //pay attention to name vs value
  inputHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      //HOW DO I KNOW WHEN TO DO AN E AND WHEN NOT TO?
      //if there is an event then it needs to be passed in the function
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
// you're passing in null and addUser from the reducer
export default connect(
  null,
  {
    addUser
  }
)(Auth);
