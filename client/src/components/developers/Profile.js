import React, { Component } from "react";
import isEmpty from "../../validation/is_Empty";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const {
      userAvatar,
      handle,
      status,
      skills,
      company,
      location,
      website,
      githubuser,
      avatar,
      userName
    } = this.props;
    console.log(skills);

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className=" col col-md-3 col-5 py-4">
            <img
              src={avatar}
              alt=""
              className="rounded-circle"
              style={{ width: "100px" }}
            />
          </div>
          <div className=" col col-md-4 col-sm-4 py-4">
            <h4>{userName}</h4>
            <p>
              {status} {isEmpty(company) ? null : <span>at {company}</span>}
            </p>
            <p>{isEmpty(location) ? null : <span> {location} </span>}</p>
            <Link to={`/profile/${handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {skills.slice(0, 3).map((item, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
