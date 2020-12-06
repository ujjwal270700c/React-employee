import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/pages/Home";
import About from "./components/layouts/pages/About";
import EmpolyeeState from "./components/layouts/employee/EmployeeState";
import RegisterUser from "./components/layouts/Register";
import Login from "./components/layouts/Login";
import UserState from "./components/layouts/auth/AuthState";
import AuthToken from './components/layouts/auth/tokenAuth';
import PrivateRoute from './components/layouts/auth/ProctectRoute';

if(localStorage.token){
  AuthToken(localStorage.token);
}

function App() {
  return (
    <UserState>
      <EmpolyeeState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={RegisterUser} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </EmpolyeeState>
    </UserState>
  );
}

export default App;
