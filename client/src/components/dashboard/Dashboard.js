import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import Spinner from "../layout/Spinner";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getCurrentProfile();
  }
  //Delete profile
  deleteProfileHandle = e => {
    e.preventDefault();
    console.log("deleted");
  };

  render() {
    console.log(this.props);
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //check for profile
      if (Object.keys(profile).length > 0) {
        //user has profile
        dashboardContent = (
          <div className="mt-3">
            <h3>
              Welcome{" "}
              <small className="muted">
                <Link to={`/profile/${profile.handle}`}> {user.name} </Link>
              </small>
            </h3>
            <ProfileActions />
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
      <div className="main_height">
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

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
