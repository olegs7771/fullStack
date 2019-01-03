import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <nav className="navbar  navbar-dark bg-dark py-0">
          <Link to="/">
            <span className="navbar-brand">DevConnector</span>
          </Link>

          <nav className="navbar navbar-expand-lg mr-auto ">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Developers
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="navbar navbar-expand-lg ml-auto ">
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
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
