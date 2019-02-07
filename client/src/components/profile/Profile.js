import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGitHub from "./ProfileGitHub";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../actions/profileAction";
import PropTypes from "prop-types";

class Profile extends Component {
  state = {
    errors: {},
    profile: {}
  };

  static getDerivedStateFromProps(props, state) {
    if (
      state.errors !== props.errors ||
      state.profile !== props.profile.profile
    ) {
      return {
        errors: props.errors,
        profile: props.profile.profile
      };
    }
    if (state.profile === null) {
      props.history.push("/not_found");
    }

    return null;
  }

  componentDidMount() {
    const { handle } = this.props.match.params;
    this.props.getProfileByHandle(handle);
  }

  render() {
    console.log(this.state);

    const { profile, loading } = this.props.profile;

    if (profile === null || loading) {
      //still no profile and loading state true;

      return <Spinner />;
    } else {
      // loading became false in state while profile loaded up
      const {
        skills,
        status,
        company,
        website,
        bio,
        location,
        education,
        experience
      } = this.props.profile.profile;
      const {
        youtube,
        twitter,
        facebook,
        instagram,
        linkedin
      } = this.props.profile.profile.social;
      const { name, avatar } = this.props.profile.profile.user;

      return (
        <div>
          <Link to="/developers">
            <i className="fas fa-arrow-left mr-2 btn  btn-info" />
            Back To Profiles
          </Link>
          <br />
          <br />
          <ProfileHeader
            name={name}
            avatar={avatar}
            company={company}
            location={location}
            status={status}
            website={website}
            youtube={youtube}
            twitter={twitter}
            facebook={facebook}
            instagram={instagram}
            linkedin={linkedin}
          />

          <ProfileAbout bio={bio} name={name} skills={skills} />

          <ProfileCreds experience={experience} education={education} />

          {profile.githubusername ? (
            <ProfileGitHub githubUser={profile.githubusername} />
          ) : null}
        </div>
      );
    }
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProp,
  { getProfileByHandle }
)(Profile);
