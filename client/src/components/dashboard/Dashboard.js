import React, { Component } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="main_height">
        <h3>dashboard</h3>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  profiles: state.profiles,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
