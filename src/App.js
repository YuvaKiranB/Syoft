import { Route, Switch, Redirect } from "react-router-dom";
import { Component } from "react";

import Context from "./Context";

import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

class App extends Component {
  state = {
    userName: "",
  };

  render() {
    const { username } = this.state;
    return (
      <Context.Provider
        value={{
          username,
        }}
      >
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    );
  }
}

export default App;
