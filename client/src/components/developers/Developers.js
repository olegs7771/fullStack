import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profileAction";
import PropTypes from "prop-types";

class Developers extends Component {
  state = {
    showprofiles: false
  };

  componentDidMount() {
    this.props.getAllProfiles();
  }

  render() {
    console.log(this.props);
    const { profiles } = this.props;
    console.log(profiles);

    return (
      <div>
        <h4>profiles</h4>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profiles: state.profile.profiles
});

Developers.propTypes = {
  profiles: PropTypes.array
};

export default connect(
  mapStateToProps,
  { getAllProfiles }
)(Developers);
