import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <br />
                <div className="display-4 mb-4">Developer Connector</div>
                <p>
                  Create a Developer Profile/Portfolio. Shared with other
                  Developers
                </p>
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  SignUp
                </Link>
                <Link to="/login" className="btn btn-lg btn-light ">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
