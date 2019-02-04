import React, { Component } from "react";
import isEmpty from "../../validation/is_Empty";
import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

class ProfileHeader extends Component {
  render() {
<<<<<<< HEAD
    console.log(this.props);

=======
>>>>>>> bc103b738398f71a9d778ee8af25951d9d6c2eac
    const {
      name,
      avatar,
      status,
      company,
      location,
      website,
      youtube,
      twitter,
      facebook,
      instagram,
      linkedin
    } = this.props;
    return (
      <div className="row ">
        <div className="col-md-12">
          <div className="card  card-body bg-info mb-1">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  src={avatar}
                  alt=""
                  className="rounded-circle mb-4   "
                  style={{
                    width: "150px",
                    border: "5px solid white"
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <p className=" text-center text-white h3">{name}'s profile</p>

              <p className="text-center text-white">
                {!(status === "0") ? (
                  <span>
                    {status} at {company}
                  </span>
                ) : (
                  <span>Company {company}</span>
                )}
              </p>

              <p className=" text-center text-white">{location}</p>

              {website ? (
                <p className="text-center ">
                  <a
                    href={website}
                    target="_blank "
                    className="btn btn-link text-white"
                  >
                    Visit my page
                  </a>
                </p>
              ) : null}

              {/* {Social Links} */}

              <div className="text-center text-white d-inline-flex p-2">
                {facebook ? (
                  <Link
                    to={facebook}
                    className="text-white p-2 "
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-facebook fa-2x " />
                  </Link>
                ) : null}
              </div>
              <div className="text-center text-white d-inline-flex p-2">
                {youtube ? (
                  <Link
                    to={youtube}
                    className="text-white p-2 "
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-youtube fa-2x " />
                  </Link>
                ) : null}
              </div>
              <div className="text-center text-white d-inline-flex p-2">
                {twitter ? (
                  <Link
                    to={twitter}
                    className="text-white p-2 "
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-twitter fa-2x " />
                  </Link>
                ) : null}
              </div>
              <div className="text-center text-white d-inline-flex p-2">
                {instagram ? (
                  <Link
                    to={instagram}
                    className="text-white p-2 "
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-instagram fa-2x " />
                  </Link>
                ) : null}
              </div>
              <div className="text-center text-white d-inline-flex p-2">
                {linkedin ? (
                  <Link
                    to={linkedin}
                    className="text-white p-2 "
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-linkedin fa-2x " />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
