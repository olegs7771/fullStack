import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import TextInputForm from "../common/TextInputForm";

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
      <div className="main_height">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="text-center">Sign Up</h2>
            <p className="lead text-center">Create Your DevConn Acount</p>
            <br />
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <form onSubmit={this.onSubmitRegister}>
                    <TextInputForm
                      name="name"
                      value={name}
                      placeholder="Your name here.."
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputForm
                      name="email"
                      value={email}
                      placeholder="Your email here.."
                      onChange={this.onChange}
                      error={errors.email}
                      info="This site uses Gravatar.If you use your Gravatar email Than your profile will be with a picture"
                    />
                    <TextInputForm
                      name="password1"
                      value={password1}
                      placeholder="Choose password "
                      onChange={this.onChange}
                      error={errors.password1}
                    />
                    <TextInputForm
                      name="password2"
                      value={password2}
                      placeholder="Confirm password"
                      onChange={this.onChange}
                      error={errors.password2}
                    />

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
