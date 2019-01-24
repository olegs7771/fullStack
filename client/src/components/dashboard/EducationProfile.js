import React, { Component } from "react";
import { connect } from "react-redux";

class EducationProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container my-3 ">
        <div className="text-center lead text-muted mb-4">Education</div>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>School</td>
              <td>{this.props.school}</td>
            </tr>
            <tr>
              <td>Degree</td>
              <td>{this.props.degree}</td>
            </tr>
            <tr>
              <td>Field Of Study</td>
              <td>{this.props.fieldofstudy}</td>
            </tr>
            <tr>
              <td>from</td>
              <td>{this.props.to}</td>
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

export default connect(mapStateToProps)(EducationProfile);
