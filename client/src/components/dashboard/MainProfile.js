import React, { Component } from "react";

import { connect } from "react-redux";

class MainProfile extends Component {
  state = {
    showSocial: false
  };

  render() {
    const {
      handle,
      status,
      skills,
      company,
      website,
      location,
      github,
      facebook,
      twitter,
      youtube,
      linkedin,
      instagram
    } = this.props;

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Handle: {handle}</li>
          <li className="list-group-item">
            {status ? (
              <span>
                {status} at {company ? company : <span>some company</span>}{" "}
              </span>
            ) : null}
          </li>
          <li className="list-group-item">Skills: {skills}</li>
          <li className="list-group-item">Website: {website}</li>
          <li className="list-group-item">Location: {location}</li>
          <li className="list-group-item">GitHub: {github}</li>
        </ul>
        <button
          className="btn btn-block bg-dark text-white"
          onClick={() => {
            this.setState({
              showSocial: !this.state.showSocial
            });
          }}
        >
          Show Social Links
        </button>
        {this.state.showSocial ? (
          <div className="mx-auto my-4">
            {/* {check for social link existence} */}
            {twitter ? (
              <a href={twitter}>
                <span className="bg-info text-white px-2 mr-2">
                  <i className="fab fa-twitter mr-1   " />
                </span>
              </a>
            ) : null}
            {facebook ? (
              <a href={facebook}>
                <span className="bg-info text-white px-2 mr-2">
                  <i className="fab fa-facebook mr-1   " />
                </span>
              </a>
            ) : null}
            {youtube ? (
              <a href={youtube}>
                <span className="bg-danger text-white px-2 mr-2">
                  <i className="fab fa-youtube mr-1   " />
                </span>
              </a>
            ) : null}
            {linkedin ? (
              <a href={linkedin}>
                <span className="bg-info text-white px-2 mr-2">
                  <i className="fab fa-linkedin mr-1   " />
                </span>
              </a>
            ) : null}
            {instagram ? (
              <a href={instagram}>
                <span className="bg-danger text-white px-2 mr-2">
                  <i className="fab fa-instagram mr-1   " />
                </span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(MainProfile);
