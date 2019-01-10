import React, { Component } from "react";
import { connect } from "react-redux";
import TextInputForm from "../common/TextInputForm";
import TextAreaForm from "../common/TextAreaForm";
import SelectInputForm from "../common/SelectInputForm";
import InputSocilaForm from "../common/InputSocilaForm";
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
    const { handle, skills, status } = this.state;
    e.preventDefault();
    console.log("submitted");
    const newProfile = { handle, skills, status };
    this.props.registerCurrentProfile(newProfile);
    console.log(newProfile);
  };

  render() {
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
    //Select options for status
    const options = [
      { label: "* Select Professional status", value: 0 },
      { label: " Developer", value: "Developer" },
      { label: " Junior Developer", value: "Junior Developer" },
      { label: " Senior Developer", value: "Senior Developer" },
      { label: " Manager", value: "Manager" },
      { label: " Student or Lernining", value: "Student or Lernining" },
      { label: " Instructor or Teacher", value: "Instructor or Teacher" },
      { label: " Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];

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
                      info="A unique handle for your profile URL.Your full name, company name, nick name."
                    />
                    <SelectInputForm
                      name="status"
                      value={status}
                      placeholder="Status"
                      options={options}
                      onChange={this.onChange}
                      error={errors.status}
                    />
                    <TextInputForm
                      name="skills"
                      value={skills}
                      placeholder=" * Skills"
                      onChange={this.onChange}
                      error={errors.handle}
                      info="Please add your skills and use comma ','"
                    />

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-lg btn-info mt-3"
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
