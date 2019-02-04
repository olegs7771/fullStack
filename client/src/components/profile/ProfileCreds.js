import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props;

    const expItem = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h5>{exp.company}</h5>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            " present"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          {exp.location ? (
            <span>
              {" "}
              Location: <span className="text-info">{exp.location}</span>
            </span>
          ) : null}
        </p>
        <p>
          {exp.description ? (
            <span>
              Position: <span className="text-info">{exp.description}</span>
            </span>
          ) : null}
        </p>
      </li>
    ));
    const eduItem = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h5>{edu.school}</h5>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            " present"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          {edu.degree ? (
            <span>
              {" "}
              Degree: <span className="text-info">{edu.degree}</span>
            </span>
          ) : null}
        </p>
        <p>
          {edu.fieldofstudy ? (
            <span>
              Field of Study:{" "}
              <span className="text-info">{edu.fieldofstudy}</span>
            </span>
          ) : null}
        </p>
        <p>
          {edu.description ? (
            <span>
              Field of Study:{" "}
              <span className="text-info">{edu.description}</span>
            </span>
          ) : null}
        </p>
      </li>
    ));

    return (

      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body m-auto bg-light py-3">creds</div>

      <div className="row">
        <div className="col-md-6">
          <div className="text-center text-info h4">Experience</div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body m-auto bg-light py-3">
                <ul className="list-group">{expItem}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center text-info h4">Education</div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body m-auto bg-light py-3">
                <ul className="list-group">{eduItem}</ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default ProfileCreds;
