import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moduleName from "module";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";

class AddExperience extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div className="main_height">
        <h4>Exp Here</h4>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withRouter(AddExperience));
