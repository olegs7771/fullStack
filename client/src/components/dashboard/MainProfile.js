import React, { Component } from "react";
import { connect } from "react-redux";

class MainProfile extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user);

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle border"
            />{" "}
          </div>
          <div className="col">profile Here</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MainProfile);
