import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import authContext from "./auth/AuthContext";

const Navbar = () => {
  const authcontext = useContext(authContext);
  const { user, isAuthenticated, logout } = authcontext;
  const Exit=()=>{
     logout();
  }
  const authlink = (
    <Fragment>
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item active">
        <a onClick={Exit} className="nav-link" href="/">
          Logout
        </a>
      </li>
    </Fragment>
  );
  const unauthlink = (
    <Fragment>
      <Link class="navbar-brand" to="/">
        Home
      </Link>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          About App
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Log In
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar navbar-expand-lg navbar-primary bg-dark">
      <Link class="navbar-brand" to="/">
        Employee App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {isAuthenticated ? authlink : unauthlink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
