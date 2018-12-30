import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header text-center h4">Register</div>
              <div className="card-body">
                <div className="container">
                  <form>
                    <div className="group-control group-control-lg">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value=""
                        placeholder="Name..."
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
