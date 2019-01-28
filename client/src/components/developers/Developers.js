import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profileAction";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import Profile from "./Profile";

class Developers extends Component {
  state = {
    showprofiles: false,
    errors: {},
    profiles: null
  };

  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.getAllProfiles();
  }

  render() {
    console.log(this.props);
    const { profiles, loading } = this.props.profile;

    let profileItem;

    if (profiles === null || loading) {
      profileItem = <Spinner />; //no profiles only loading is true
      console.log(profiles);
    } else {
      if (profiles.length > 0) {
        console.log(profiles.length);
        //profiles is array so we check with length
        return profiles.map((profile, id) => (
          <Profile
            key={id}
            handle={profile.handle}
            status={profile.status}
            skills={profile.skills}
            company={profile.company}
            location={profile.location}
            website={profile.website}
            githubuser={profile.githubuser}
            avatar={profile.user.avatar}
            userName={profile.user.name}
          />
        ));
      } else {
        profileItem = <h4>No profiles to show</h4>;
      }
    }

    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h4 className="text-center">Developers profiles</h4>
            <p className="text-center">
              Browse and Connect with other Developers
            </p>
            {profileItem}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

Developers.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getAllProfiles }
)(Developers);
