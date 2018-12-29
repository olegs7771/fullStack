import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <nav className="navbar  navbar-dark bg-dark">
          <div className="navbar-brand">DevConect</div>
          <nav className="navbar navbar-expand-lg mr-auto ">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Developers
                </a>
              </li>
            </ul>
          </nav>
          <nav className="navbar navbar-expand-lg ml-auto ">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Login
                </a>
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
export default Header;