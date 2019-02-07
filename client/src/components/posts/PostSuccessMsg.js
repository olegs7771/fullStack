import React from "react";
import { Link } from "react-router-dom";

const PostSuccessMsg = () => {
  return (
    <div className="container " style={{ height: "300px" }}>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="text-center h4">
            Your post has been seccessfully posted.
          </div>
          <Link to="/dashboard" className="btn btn-info mt-4">
            Go Back To Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostSuccessMsg;
