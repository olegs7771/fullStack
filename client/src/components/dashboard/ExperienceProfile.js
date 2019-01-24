import React, { Component } from "react";
import { connect } from "react-redux";

class ExperienceProfile extends Component {
  render() {
    return (
      <div className="container my-3 ">
        <div className="text-center lead text-muted mb-4">Experience</div>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Title</td>
              <td>{this.props.title}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{this.props.company}</td>
            </tr>
            <tr>
              <td>From</td>
              <td>{this.props.from}</td>
            </tr>
            <tr>
              <td>to</td>
              <td>{this.props.to}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{this.props.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ExperienceProfile);
