import React, { Component } from "react";

import PropTypes from "prop-types";

class ProfileGitHub extends Component {
  state = {
    clientId: "aa9dbc2066cf6768fda8",
    clientSecret: "0ca4eae21b63507875c6a68f970bc52a562e3af1",
    count: 5,
    sort: "created:asc",
    repos: []
  };

  // static getDerivedStateFromProps(props, state) {}
  // componentDidUpdate() {}

  componentDidMount() {
    const { clientId, clientSecret, count, sort } = this.state;
    const { githubUser } = this.props;

    //fetch from github using fetch()
    fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({
            repos: data
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const reposItem = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-3">
        <div className="row">
          <h4>
            <a
              href={repo.html_url}
              className="text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </h4>
          <p>{repo.description}</p>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success mr-1">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref="myRef">
        <hr />

        <h4 className="mb-4">Latest Repos</h4>
        {reposItem}
      </div>
    );
  }
}

ProfileGitHub.propTypes = {
  githubUser: PropTypes.string.isRequired
};

export default ProfileGitHub;
