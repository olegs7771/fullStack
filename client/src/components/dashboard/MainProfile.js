import React, { Component } from "react";
import { connect } from "react-redux";

class MainProfile extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user);

    console.log(this.props);
    return (
      <div className="container my-3 ">
        <div className="row">
          {/* {main profile picture from avatar} */}
          <div className="col-md-4 pr-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle border my-4 "
              style={{ width: "150px", marginLeft: "5px" }}
            />{" "}
          </div>
          {/* {main profile credentials} */}
          <div className="col-md-8">
            <div className="text-center h4 text-muted my-3">Basic Info</div>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">Handle</span>
                  </td>
                  <td>
                    <span>{this.props.handle}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">Professional Status</span>
                  </td>
                  <td>
                    <span>{this.props.profStatus}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">Skills</span>
                  </td>
                  <td>
                    <span>{this.props.skills}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">Company</span>
                  </td>
                  <td>
                    <span>{this.props.company}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">Location</span>
                  </td>
                  <td>
                    <span>{this.props.location}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <span className="text-muted ">GitHub User</span>
                  </td>
                  <td>
                    <span>{this.props.githubusername}</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
