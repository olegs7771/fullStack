import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextInputForm from "../common/TextInputForm";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  static getDerivedStateFromProps(props, state) {
    if (props.errors) {
      return { errors: props.errors };
    } else {
      return null;
    }
  }

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

    const { email, password } = this.state;
    return (
      <div className="main_height">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br />
            <div className="card">
              <div className="card-header text-center h4">Login</div>
              <div className="card-body">
                <div className="container">
                  <form onSubmit={this.onSubmitLogin}>
                    <TextInputForm
                      name="email"
                      value={email}
                      placeholder="email.."
                      type="email"
                      onChange={this.onChange}
                      error={errors.email}
                      info="This site uses Gravatar"
                    />
                    <TextInputForm
                      name="password"
                      value={password}
                      placeholder="password.."
                      type="text"
                      onChange={this.onChange}
                      error={errors.password}
                    />

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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
