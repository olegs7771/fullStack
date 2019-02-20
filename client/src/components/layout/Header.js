import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";

class Header extends Component {
  //Logout User
  logoutUser = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  render() {
    const { user, authenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px" }}
              className="rounded-circle mr-2"
            />
            {user.name}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            onClick={this.logoutUser.bind(this)}
          >
            Logout
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="pos-f-t mb-3">
        <nav className="navbar  navbar-dark bg-dark py-0">
          <Link to="/">
            <span className="navbar-brand">DevConnector</span>
          </Link>

          <nav className="navbar navbar-expand-lg mr-auto ">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link to="/developers" className="nav-link">
                  Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feed" className="nav-link">
                  Post Feed
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="navbar navbar-expand-lg ml-auto ">
            {authenticated ? authLinks : guestLinks}
          </nav>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Header);
