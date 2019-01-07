import React, { Component } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import Spinner from "../layout/Spinner";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getCurrentProfile();
  }

  render() {
    console.log(this.props);
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = <h4>Wellcom {user.name}</h4>;
    }

    return <div className="main_height">{dashboardContent}</div>;
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
