import { Switch, Route } from "react-router-dom";
import React from "react";

import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/post/:postid" component={Post} />
    <Route exact path="/new" component={Form} />
  </Switch>
);
