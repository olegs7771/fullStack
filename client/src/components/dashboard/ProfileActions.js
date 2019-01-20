import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = props => {
  const { name } = props;
  return (
    <div className="btn-group mb-4" role="group">
      <Link to={`/edit-profile/${name}`} className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1"> Edit Profile</i>
      </Link>
      <Link to={`edit-exp/${name}`} className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1"> Add Experience</i>
      </Link>
      <Link to="/edit-edu" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1"> Add Education</i>
      </Link>
    </div>
  );
};
export default ProfileActions;
