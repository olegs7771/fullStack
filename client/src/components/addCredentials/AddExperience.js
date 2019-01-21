import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moduleName from "module";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import { log } from "util";
import { format } from "url";

class AddExperience extends Component {
  state = {
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile, loading } = this.props.profile;
    let expForm;

    if (profile === null || loading === true) {
      expForm = <h4>Loading..</h4>;
    } else {
      expForm = <h3>{profile.handle}</h3>;
    }

    return (
      <div className="main_height">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="card-heading text-center">{expForm}</div>
                <div className="container">
                  <form onSubmit={this.submitFromExp} />
                </div>
              </div>
            </div>
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

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withRouter(AddExperience));
