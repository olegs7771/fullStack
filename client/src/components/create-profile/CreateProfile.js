import React, { Component } from "react";
import { connect } from "react-redux";
import TextInputForm from "../common/TextInputForm";
import PropTypes from "prop-types";
import { registerCurrentProfile } from "../../actions/profileAction";

class CreateProfile extends Component {
  state = {
    displaySocialInput: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // Submit form

  registerFormSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    this.props.registerCurrentProfile();
  };

  render() {
    console.log(this.props);
    const { user } = this.props.auth;
    const { errors } = this.props;
    console.log(errors);

    const {
      displaySocialInput,
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram
    } = this.state;

    return (
      <div className="main_height">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="display-4 text-center">Create Profile</div>
              <p>
                Dear {user.name} ,you can create a new profile by filling up
                those form fields.
              </p>
              <small className=" d-block pb-3">* = required fields</small>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.registerFormSubmit}>
                    <TextInputForm
                      name="handle"
                      value={handle}
                      placeholder=" * Handle"
                      onChange={this.onChange}
                      error={errors.handle}
                    />
                    <TextInputForm
                      name="handle"
                      value={handle}
                      placeholder=" * Handle"
                      onChange={this.onChange}
                      error={errors.handle}
                    />
                    <select name="Skills" id="" />
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-lg btn-info"
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
CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { registerCurrentProfile }
)(CreateProfile);
