import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = props => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1"> Edit Profile</i>
      </Link>
      <Link to="/edit-exp" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1"> Add Experience</i>
      </Link>
      <Link to="/edit-edu" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1"> Add Education</i>
      </Link>
    </div>
  );
};
export default ProfileActions;
