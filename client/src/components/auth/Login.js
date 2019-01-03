import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

class Login extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (props.errors) {
      return { errors: props.errors };
    }
  }

  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitLogin = e => {
    const { email, password, errors } = this.state;
    e.preventDefault();
    console.log("logging...");
    const newUser = {
      email,
      password,
      errors
    };
    this.props.loginUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.props;
    console.log(errors);

    const { email, password } = this.state;
    return (
      <div className="register">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br />
            <div className="card">
              <div className="card-header text-center h4">Login</div>
              <div className="card-body">
                <div className="container">
                  <form onSubmit={this.onSubmitLogin}>
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
                          "is-invalid": errors.password
                        })}
                        name="password"
                        value={password}
                        placeholder="Password..."
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <br />
                    <input
                      type="submit"
                      className="btn btn-secondary btn-lg"
                      value="Login"
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
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
