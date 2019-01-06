import React, { Component } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="main_height">
        <h3>dashboard</h3>
      </div>
    );
  }
}
export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
