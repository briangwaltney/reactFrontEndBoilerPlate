import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand pt-2" to="/">
          <h5>Title</h5>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto px-3">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
              </NavLink>
              </React.Fragment>
            )}
            {user && user.length !== 0 && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
              </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};



export default withRouter((NavBar));