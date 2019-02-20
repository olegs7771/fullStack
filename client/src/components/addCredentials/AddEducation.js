import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getCurrentProfile, editEducation } from "../../actions/profileAction";
import TextInputForm from "../common/TextInputForm";
import TextAreaForm from "../common/TextAreaForm";
import CheckInputForm from "../common/CheckInputForm";

class AddEducation extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {}
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
    //field 'to' will receive string 'present' if current:true
    if (this.state.current === true) {
      this.setState({
        to: null
      });
    }
    e.preventDefault();
    const newEdu = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    };

    this.props.editEducation(newEdu, this.props.history);
    console.log(newEdu);
    console.log(this.state.current);
  };

  render() {
    const { profile } = this.props.profile;
    let expForm;

    if (profile === null) {
      expForm = <h4>Loading..</h4>;
    } else {
      expForm = (
        <div>
          <h5>
            <p className="text-left">Hello {profile.handle}</p>
          </h5>
          <p className="text-left lead">
            Here You can add some of your education
          </p>{" "}
        </div>
      );
    }

    return (
      <div className="container">
        <div className="main_height">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mx-auto">
                <div className="card mt-4">
                  <div className="card-body">
                    <div className="card-heading text-center">{expForm}</div>
                    <form onSubmit={this.submitFromExp}>
                      <TextInputForm
                        name="school"
                        value={this.state.school}
                        placeholder="School"
                        onChange={this.onChange}
                        info="Put here the your school at the company "
                        error={this.state.errors.school}
                      />
                      <TextInputForm
                        name="degree"
                        value={this.state.degree}
                        placeholder="Degree"
                        onChange={this.onChange}
                        error={this.state.errors.degree}
                      />
                      <TextInputForm
                        name="fieldofstudy"
                        value={this.state.fieldofstudy}
                        placeholder="Field of study "
                        onChange={this.onChange}
                        error={this.state.errors.fieldofstudy}
                      />

                      <TextInputForm
                        name="from"
                        type="date"
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
                          type="date"
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
                        placeholder="Describe what you have learned"
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
  { getCurrentProfile, editEducation }
)(withRouter(AddEducation));
