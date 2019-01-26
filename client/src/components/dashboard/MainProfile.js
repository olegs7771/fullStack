import React, { Component } from "react";
import { connect } from "react-redux";

class MainProfile extends Component {
  state = {
    showSocialLinks: false
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);

    console.log(this.props);
    return (
      <div className="container my-3 ">
        <div className="row justify-content-md-center">
          {/* {main profile picture from avatar} */}
          <div className="col-md-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle border my-4 "
              style={{ width: "150px", marginLeft: "5px" }}
            />{" "}
          </div>
          {/* {main profile credentials} */}
          <div className=" col-md-10">
            <div className="text-center h4 text-muted my-3">Basic Info</div>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Handle</th>
                  <th scope="col">Prof Status</th>
                  <th scope="col">Skills</th>
                  <th scope="col">Company</th>
                  <th scope="col">Location</th>
                  <th scope="col">GitHub User</th>
                  <th scope="col">Web site</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-muted">{this.props.handle}</td>
                  <td className="text-muted">{this.props.profStatus}</td>
                  <td className="text-muted">{this.props.skills}</td>
                  <td className="text-muted">{this.props.company}</td>
                  <td className="text-muted">{this.props.location}</td>
                  <td className="text-muted">{this.props.githubusername}</td>
                  <td className="text-muted">{this.props.website}</td>
                </tr>
              </tbody>
            </table>

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
                <div className="container mt-4">
                  <div className="container my-3 ">
                    {this.props.youtube ? (
                      <div className="d-inline p-2  mr-2">
                        <a href={this.props.youtube}>
                          <span className="text-white bg-danger p-2 rounded">
                            <i className="fab fa-youtube-square mr-1 " />{" "}
                            Youtube
                          </span>
                        </a>
                      </div>
                    ) : null}
                    {this.props.twitter ? (
                      <div className="d-inline p-2  mr-2 ">
                        <a href={this.props.twitter}>
                          <span className="text-white bg-info  p-2 rounded">
                            <i className="fab fa-twitter-square mr-1 " />
                            Twitter
                          </span>
                        </a>
                      </div>
                    ) : null}
                    {this.props.instagram ? (
                      <div className="d-inline p-2  mr-2">
                        <a href={this.props.instagram}>
                          <span className="text-white bg-danger p-2 rounded">
                            <i className="fab fa-instagram mr-1 " /> Instagram
                          </span>
                        </a>
                      </div>
                    ) : null}
                    {this.props.facebook ? (
                      <div className="d-inline p-2  mr-2">
                        <a href={this.props.facebook}>
                          <span className="text-white bg-primary p-2 rounded">
                            <i className="fab fa-facebook-square mr-1 " />{" "}
                            Facebook
                          </span>
                        </a>
                      </div>
                    ) : null}
                  </div>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MainProfile);
