import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getCurrentProfile, editExperience } from "../../actions/profileAction";
import TextInputForm from "../common/TextInputForm";
import TextAreaForm from "../common/TextAreaForm";
import CheckInputForm from "../common/CheckInputForm";

class AddExperience extends Component {
  state = {
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    currentlyEmployed: ""
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //checking for props change( errors)
  static getDerivedStateFromProps(props, state) {
    if (props.errors !== state.errors) {
      return {
        errors: props.errors
      };
    } else {
      return null;
    }
  }

  //show To form
  handlerShowFormTo = e => {
    console.log("clicked");

    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  //submitting experience array form

  handleSubmitExp = e => {
    //field 'to' will receive string if current:true
    let currentlyWorking;
    if (this.state.current === true) {
      currentlyWorking = "to present";
    } else {
      currentlyWorking = "";
    }
    this.setState({
      currentlyEmployed: currentlyWorking
    });

    e.preventDefault();
    const newExp = {
      title: this.state.title,
      company: this.state.company,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    };

    this.props.editExperience(newExp, this.props.history);
    console.log(newExp);
    console.log(this.state.current);
  };

  render() {
    const { profile } = this.props.profile;
    let expForm;

    if (profile === null) {
      expForm = <h4>Loading..</h4>;
    } else {
      expForm = <h3>{profile.handle}</h3>;
    }

    return (
      <div className="container">
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
                        name="from"
                        value={this.state.from}
                        placeholder="From"
                        onChange={this.onChange}
                        info={this.state.currentlyEmployed}
                        error={this.state.errors.from}
                      />

                      <div className="row">
                        <div className="col-sm-8">Currently employed</div>
                        <div className="col-sm-4">
                          {" "}
                          <CheckInputForm
                            name="current"
                            checked={this.state.current}
                            onChange={this.handlerShowFormTo}
                          />
                        </div>
                      </div>

                      {!this.state.current ? (
                        <TextInputForm
                          name="to"
                          value={this.state.to}
                          placeholder="to"
                          onChange={this.onChange}
                          info=""
                          error={this.state.errors.to}
                        />
                      ) : null}
                      <TextAreaForm
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        placeholder="Describe your position"
                        error={this.state.errors.description}
                      />

                      <button
                        className="btn btn-light btn-block mt-3"
                        onClick={this.handleSubmitExp}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
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
  { getCurrentProfile, editExperience }
)(withRouter(AddExperience));
