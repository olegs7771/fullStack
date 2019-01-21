import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import TextInputForm from "../common/TextInputForm";

class AddExperience extends Component {
  state = {
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { profile, loading } = this.props.profile;
    let expForm;

    if (profile === null) {
      expForm = <h4>Loading..</h4>;
    } else {
      expForm = <h3>{profile.handle}</h3>;
    }

    return (
      <div className="main_height">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="card mt-4">
              <div className="card-body">
                <div className="card-heading text-center">{expForm}</div>
                <div className="container">
                  <form onSubmit={this.submitFromExp}>
                    <TextInputForm
                      name="title"
                      value={this.state.title}
                      placeholder="Title"
                      onChange={this.onChange}
                      info="Put here the your title at the company "
                      error={this.state.errors.title}
                    />
                    <TextInputForm
                      name="company"
                      value={this.state.company}
                      placeholder="Company"
                      onChange={this.onChange}
                      info="Put here the name of the company or organization that you have been  working at"
                      error={this.state.errors.company}
                    />
                    <TextInputForm
                      name="location"
                      value={this.state.location}
                      placeholder="Location or Address"
                      onChange={this.onChange}
                      error={this.state.errors.location}
                    />
                    <TextInputForm
                      name="title"
                      value={this.state.title}
                      placeholder="Title"
                      onChange={this.onChange}
                      info="Put here the name of the company or organization that you workin at"
                      error={this.state.errors.title}
                    />
                    <TextInputForm
                      name="from"
                      value={this.state.from}
                      placeholder="From"
                      onChange={this.onChange}
                      info=""
                      error={this.state.errors.from}
                    />
                    <button className="btn btn-light btn-block mt-3">
                      Submit
                    </button>
                  </form>
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
