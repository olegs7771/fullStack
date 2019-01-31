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
  componentDidMount() {
    const { handle } = this.props.match.params;
    console.log(handle);

    this.props.getProfileByHandle(handle);
  }

  render() {
    const { profile, loading } = this.props.profile;

    if (profile === null || loading) {
      //still no profile and loading state true;
      let profileContent;
      return <Spinner />;
    } else {
      //loading became false in state while profile loaded up

      return (
        <div>
          <ProfileHeader />
          <ProfileAbout />
          <ProfileCreds />
          <ProfileGitHub />
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
  profile: state.profile
});

export default connect(
  mapStateToProp,
  { getProfileByHandle }
)(Profile);
