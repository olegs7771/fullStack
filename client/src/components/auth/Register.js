import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password1: "",
    password2: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitRegister = e => {
    e.preventDefault();
    const { name, email, password1, password2 } = this.state;
    const newUser = {
      name,
      email,
      password1,
      password2
    };
    axios
      .post("/api/users/register", newUser)
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
  };

  render() {
    const { name, email, password1, password2 } = this.state;
    return (
      <div className="register">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br />
            <div className="card">
              <div className="card-header text-center h4">Register</div>
              <div className="card-body">
                <div className="container">
                  <form onSubmit={this.onSubmitRegister}>
                    <div className="group-control group-control-lg">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        placeholder="Name..."
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="group-control group-control-lg">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        placeholder="Email..."
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="group-control group-control-lg">
                      <label>Password</label>
                      <input
                        type="text"
                        className="form-control"
                        name="password1"
                        value={password1}
                        placeholder="Password..."
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="group-control group-control-lg">
                      <label>Confirm Password</label>
                      <input
                        type="text"
                        className="form-control"
                        name="password2"
                        value={password2}
                        placeholder="Confirm Password..."
                        onChange={this.onChange}
                      />
                    </div>
                    <br />
                    <input
                      type="submit"
                      className="btn btn-secondary btn-lg
                      "
                      value="Register"
                    />
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
