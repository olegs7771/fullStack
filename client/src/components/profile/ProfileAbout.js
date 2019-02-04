import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { bio, name, skills } = this.props;

    const firstName = name.trim().split(" ")[0];
    //Create Skills from Array
    const skill = skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check text-info" />
        <span className="text-info h6">{skill}</span>
      </div>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body  bg-light ">
              <p className="text-info h4 text-center ">{firstName}'s Bio</p>
              {bio ? (
                <p className="text-info">{bio}</p>
              ) : (
                <p className="text-info">{firstName} does not have any bio.</p>
              )}
            </div>
            <div className="card card-body  bg-light ">
              <p className="text-info h4 text-center ">Skills Set</p>
              {skills ? (
                <div className="d-flex justify-content-start">{skill}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileAbout;
