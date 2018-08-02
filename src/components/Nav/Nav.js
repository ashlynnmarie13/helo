import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//When you add redux yoiu need to pass in props
const Nav = props => (
  <div>
    {console.log(props)}
    <div>{props.username}</div>
    <img src={props.profilepic} />
    <Link to="/">Logout</Link>
    <Link to="/dashboard">Home</Link>
    <Link to="/post/:postid">New post</Link>
  </div>
);

//shorthand for mapstatetoprops
export default connect(state => state)(Nav);
