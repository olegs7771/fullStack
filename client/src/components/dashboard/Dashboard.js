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

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //check for profile
      if (Object.keys(profile).length > 0) {
        //user has profile
        console.log(profile);
        dashboardContent = (
          <div className="mt-3">
            <h3>
              Welcome{" "}
              <small className="muted">
                <Link to="/profile"> {user.name} </Link>
              </small>
            </h3>
            <hr />
            <MainProfile
              handle={profile.handle}
              profStatus={profile.status}
              skills={profile.skills.join(",")}
              company={profile.company}
              website={profile.website}
              location={profile.location}
              githubusername={profile.githubusername}
            />
            <hr />
            {/* {Experience & Educacation } */}

            <h5 className="text-center text-muted">Experience</h5>
            {profile.experience.map((item, i) => (
              <ExperienceProfile
                key={i}
                title={item.title}
                company={item.company}
                from={item.from}
                to={item.to}
                description={item.description}
                _id={item._id}
              />
            ))}

            <h5 className="text-center text-muted">Education</h5>
            {profile.education.map((item, id) => (
              <EducationProfile
                key={id}
                school={item.school}
                degree={item.degree}
                fieldofstudy={item.fieldofstudy}
                from={item.from}
                to={item.to}
                description={item.description}
              />
            ))}

            <ProfileActions name={user.name} />
            {/* TODO:exp and edu */}
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
      <div className="">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="display-4 text-center">Dashboard</div>

              {dashboardContent}
            </div>
          </div>
        </div>
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
