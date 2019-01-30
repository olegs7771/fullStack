import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteProfile } from "../../actions/profileAction";
//layout
import Spinner from "../layout/Spinner";
import ProfileActions from "./ProfileActions";
import MainProfile from "./MainProfile";
import ExperienceProfile from "./ExperienceProfile";
import EducationProfile from "./EducationProfile";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  //Delete profile
  deleteProfileHandle = e => {
    console.log(this.props);
    const { _id } = this.props.profile.profile;

    e.preventDefault();
    console.log("deleted :" + _id);
    this.props.deleteProfile(_id, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    console.log(profile);

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //check for profile
      if (Object.keys(profile).length > 0) {
        //user has profile

        dashboardContent = (
          <div className="mt-3">
            <h4 className="text-muted">
              Welcome{" "}
              <small>
                <Link to="/profile" className="text-dark">
                  {" "}
                  {user.name}{" "}
                </Link>
              </small>
            </h4>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="text-center h5 text-muted ">Basic Info</div>
                <MainProfile
                  avatar={profile.user.avatar}
                  user={profile.user.name}
                  handle={profile.handle}
                  profStatus={profile.status}
                  skills={profile.skills}
                  company={profile.company}
                  website={profile.website}
                  location={profile.location}
                  githubusername={profile.githubusername}
                  _id={profile._id}
                  facebook={profile.social.facebook}
                  twitter={profile.social.twitter}
                  youtube={profile.social.youtube}
                  linkedin={profile.social.linkedin}
                  instagram={profile.social.instagram}
                />
              </div>
              <hr />
              <br />
              <br />
              {/* {Experience & Educacation } */}
              <div className="col-md-6 col-sm-4">
                <h5 className="text-center text-muted">Experience</h5>
                {profile.experience.map((item, i) => (
                  <ExperienceProfile
                    key={i}
                    title={item.title}
                    company={item.company}
                    from={item.from}
                    to={item.to}
                    desc={item.description}
                    _id={item._id}
                  />
                ))}

                <h5 className="text-center text-muted">Education</h5>
                {profile.education.map((item, id) => (
                  <EducationProfile
                    key={id}
                    school={item.school}
                    degree={item.degree}
                    study={item.fieldofstudy}
                    from={item.from}
                    to={item.to}
                    desc={item.description}
                  />
                ))}
              </div>
              <ProfileActions name={user.name} />
              {/* TODO:exp and edu */}
            </div>
            <div style={{ marginBottom: "60px" }}>
              <button
                className="btn btn-danger"
                onClick={this.deleteProfileHandle}
              >
                Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div className="mt-3">
            <h3>
              Welcome <small className="muted">{user.name}</small>
            </h3>
            <p className="muted">
              You have not set profile yet. You can create a new profile{" "}
              <Link to="/create-profile">here</Link>.
            </p>
          </div>
        );
      }
    }

    return (
      <div className=" ">
        <div className="display-4 text-center">Dashboard</div>

        {dashboardContent}
      </div>
    );
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  message: PropTypes.object,
  deleteProfile: PropTypes.func.isRequired,

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors,
  message: state.profile.message
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteProfile }
)(withRouter(Dashboard));
