import React, { Component } from "react";
import { connect } from "react-redux";

class MainProfile extends Component {
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
