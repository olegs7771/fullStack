import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";

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
      password2,
      errors: {}
    };
    this.props.registerUser(newUser, this.props.history);
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (props.errors) {
      return { errors: props.errors };
    }
  }

  render() {
    console.log(this.props.errors);

    const { name, email, password1, password2, errors } = this.state;

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

Register.proptypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
