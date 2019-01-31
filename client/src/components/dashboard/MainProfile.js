import React, { Component } from "react";
import { connect } from "react-redux";

class MainProfile extends Component {
  state = {
    showSocialLinks: false
  };

  render() {
    const {
      avatar,
      user,

      profStatus,
      skills,
      company,
      website,
      location,
      githubusername,
      facebook,
      twitter,
      youtube,
      linkedin,
      instagram
    } = this.props;

    return (
      <div className="container my-3 ">
        <div className="row justify-content-md-center">
          {/* {main profile picture from avatar} */}
          <div className=" col col-md-4 d-none d-md-block">
            <img
              src={avatar}
              alt={user}
              className="rounded-circle border my-4 "
              style={{ width: "100px" }}
            />{" "}
          </div>
          {/* {main profile credentials} */}
          <div className=" col col-md-8 col-sm-8">
            {/* { Main Profile Credentials} */}
            <ul className="list-group list-group-flush py-4">
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">Name :</span>{" "}
                <span className="text-italic">{user} </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">Status :</span>{" "}
                <span className="text-italic">{profStatus} </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">Skills :</span>{" "}
                <span className="text-italic">
                  {skills.slice(0, 3).map((skill, index) => (
                    <span key={index}>{skill}, </span>
                  ))}
                </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">Company:</span>{" "}
                <span className="text-italic">{company} </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">Location:</span>{" "}
                <span className="text-italic">{location} </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">WebSite:</span>{" "}
                <span className="text-italic">{website} </span>
              </li>
              <li className="list-group-item borderless line_height">
                <span className="text-muted ">GitHub:</span>{" "}
                <span className="text-italic">{githubusername} </span>
              </li>
            </ul>

            {/* {Social Links Showen on click} */}
            {this.state.showSocialLinks ? (
              <div>
                <button
                  className="btn btn-sm btn-light "
                  onClick={() => {
                    this.setState({
                      showSocialLinks: !this.state.showSocialLinks //show Social Links on click
                    });
                  }}
                >
                  {" "}
                  <span>
                    <i className="fas fa-arrow-up mr-2" />
                    Social Links
                  </span>{" "}
                </button>

                {/* {Socila Links} */}
                <div className="my-4 ">
                  <ul className="list-group list-group-flush">
                    {youtube ? (
                      <li className="list-group-item borderless">
                        <a href={youtube}>
                          <span className="text-white bg-danger p-2 rounded">
                            <i className="fab fa-youtube-square mr-1 " />{" "}
                            Youtube
                          </span>
                        </a>
                      </li>
                    ) : null}
                    {twitter ? (
                      <li className="list-group-item borderless">
                        <a href={twitter}>
                          <span className="text-white bg-info  p-2 rounded">
                            <i className="fab fa-twitter-square mr-1 " />
                            Twitter
                          </span>
                        </a>
                      </li>
                    ) : null}
                    {instagram ? (
                      <li className="list-group-item borderless">
                        <a href={instagram}>
                          <span className="text-white bg-danger p-2 rounded">
                            <i className="fab fa-instagram mr-1 " /> Instagram
                          </span>
                        </a>
                      </li>
                    ) : null}
                    {facebook ? (
                      <li className="list-group-item borderless">
                        <a href={facebook}>
                          <span className="text-white bg-primary p-2 rounded">
                            <i className="fab fa-facebook-square mr-1  " />{" "}
                            Facebook
                          </span>
                        </a>
                      </li>
                    ) : null}
                    {linkedin ? (
                      <li className="list-group-item borderless">
                        <a href={linkedin}>
                          <span className="text-white bg-primary p-2 rounded">
                            <i className="fab fa-linkedin-square mr-1  " />{" "}
                            LinkedIn
                          </span>
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-sm btn-light "
                onClick={() => {
                  this.setState({
                    showSocialLinks: !this.state.showSocialLinks //show Social Links on click
                  });
                }}
              >
                {" "}
                <span>
                  <i className="fas fa-arrow-down mr-2" />
                  Social Links
                </span>{" "}
              </button>
            )}

            {/* {End Social } */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(MainProfile);
