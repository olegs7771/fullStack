import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextInputForm from "../common/TextInputForm";
import TextAreaForm from "../common/TextAreaForm";
import SelectInputForm from "../common/SelectInputForm";
import InputSocilaForm from "../common/InputSocilaForm";
import isEmpty from "../../validation/is_Empty";
import PropTypes from "prop-types";
import {
  registerCurrentProfile,
  getCurrentProfile
} from "../../actions/profileAction";

class EditProfile extends Component {
  state = {
    displaySocialInput: false,
    user: {},

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

  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors || props.auth.user !== state.user) {
      return {
        errors: props.errors,
        user: props.auth.user
      };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    if (this.props.profile.profile !== prevProps.profile.profile) {
      let skillsCSV = this.props.profile.profile.skills.join(",");
      const profile = this.props.profile.profile;

      console.log(profile.company);

      this.setState({
        handle: this.props.profile.profile.handle,
        skills: skillsCSV,
        status: profile.status,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        githubusername: profile.githubusername,
        bio: profile.bio
      });
    }
  }

  //load current profile
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  // Submit form

  registerFormSubmit = e => {
    e.preventDefault();
    const {
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

    let companyEmty = !isEmpty(company) ? company : "";
    console.log(company);

    const newProfile = {
      handle,
      company: companyEmty,
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
    };

    console.log(this.state);

    this.props.registerCurrentProfile(newProfile, this.props.history);
    console.log(newProfile);
  };

  render() {
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
      instagram,
      errors,
      user
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
      <div>
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
                      info="Please use comma separated values (eg. HTML,CSS,PHP,JavaScrypt)"
                    />
                    <TextInputForm
                      name="company"
                      value={company}
                      placeholder=" Company"
                      onChange={this.onChange}
                      error={errors.company}
                      info="Coudld be your own company or one you work for"
                    />
                    <TextInputForm
                      name="website"
                      value={website}
                      placeholder=" Website"
                      onChange={this.onChange}
                      error={errors.website}
                      info="Coudld be your own company website"
                    />
                    <TextInputForm
                      name="location"
                      value={location}
                      placeholder="Location"
                      onChange={this.onChange}
                      error={errors.location}
                      info="City & State"
                    />
                    <TextInputForm
                      name="githubusername"
                      value={githubusername}
                      placeholder="GitHub Username"
                      onChange={this.onChange}
                      error={errors.githubusername}
                      info="If you want your latest repos and aGithub link, include your username"
                    />
                    <TextAreaForm
                      name="bio"
                      value={bio}
                      placeholder="Short Bio"
                      onChange={this.onChange}
                      error={errors.bio}
                      info="Tell us a little about yourself"
                    />
                    <div className="mb-3">
                      <button
                        type="button"
                        className="btn btn-light mt-3"
                        onClick={() => {
                          this.setState({
                            displaySocialInput: !this.state.displaySocialInput
                          });
                        }}
                      >
                        Add Social Network Links
                      </button>{" "}
                    </div>
                    {displaySocialInput ? (
                      <div>
                        <InputSocilaForm
                          name="twitter"
                          value={twitter}
                          placeholder="Twitter Profile URL"
                          error={errors.twitter}
                          icon="fab fa-twitter"
                          onChange={this.onChange}
                        />
                        <InputSocilaForm
                          name="facebook"
                          value={facebook}
                          placeholder="Facebook Profile URL"
                          error={errors.facebook}
                          icon="fab fa-facebook"
                          onChange={this.onChange}
                        />
                        <InputSocilaForm
                          name="linkedin"
                          value={linkedin}
                          placeholder="Linkedin Profile URL"
                          error={errors.linkedin}
                          icon="fab fa-linkedin"
                          onChange={this.onChange}
                        />
                        <InputSocilaForm
                          name="youtube"
                          value={youtube}
                          placeholder="Youtube Channel URL"
                          error={errors.youtube}
                          icon="fab fa-youtube"
                          onChange={this.onChange}
                        />
                        <InputSocilaForm
                          name="instagram"
                          value={instagram}
                          placeholder="Instagram Profile URL "
                          error={errors.instagram}
                          icon="fab fa-instagram"
                          onChange={this.onChange}
                        />
                      </div>
                    ) : null}

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
// EditProfile.propTypes = {
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
//   registerCurrentProfile: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { registerCurrentProfile, getCurrentProfile }
)(withRouter(EditProfile));
