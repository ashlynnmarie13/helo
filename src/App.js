import React, { Component } from "react";

import "./App.css";

import { withRouter } from "react-router";
import routes from "./route.js";
import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {this.props.location.pathname !== "/" && <Nav />} */}
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
