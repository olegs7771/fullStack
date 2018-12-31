import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password1: "",
    password2: "",
    errors: {}
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
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  };

  render() {
    const { name, email, password1, password2, errors } = this.state;
    console.log(errors);
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
                    <div className="group-control ">
                      <label>Name</label>
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.name
                        })}
                        name="name"
                        value={name}
                        placeholder="Name..."
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="group-control ">
                      <label>Email</label>
                      <input
                        type="email"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email
                        })}
                        name="email"
                        value={email}
                        placeholder="Email..."
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="group-control ">
                      <label>Password</label>
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password1
                        })}
                        name="password1"
                        value={password1}
                        placeholder="Password..."
                        onChange={this.onChange}
                      />
                      {errors.password1 && (
                        <div className="invalid-feedback">
                          {errors.password1}
                        </div>
                      )}
                    </div>
                    <div className="group-control ">
                      <label>Confirm Password</label>
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password2
                        })}
                        name="password2"
                        value={password2}
                        placeholder="Confirm Password..."
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <div className="invalid-feedback">
                          {errors.password2}
                        </div>
                      )}
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
