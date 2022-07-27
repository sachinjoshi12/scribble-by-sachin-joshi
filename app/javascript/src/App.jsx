import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignIn from "components/Authentication/SignIn";
import PrivateRoute from "components/Common/PrivateRoute";
import Home from "components/Home";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
