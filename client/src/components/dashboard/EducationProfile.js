import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

class EducationProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container my-3 ">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-muted">Title</th>
              <th className="text-muted">Company</th>
              <th className="text-muted">Years</th>
              <th className="text-muted">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-muted">{this.props.title}</td>
              <td className="text-muted">{this.props.company}</td>
              <td>
                <Moment format="YYYY/MM/DD">{this.props.from}</Moment> -{" "}
                {this.props.to === null ? (
                  "present"
                ) : (
                  <Moment format="YYYY/MM/DD">{this.props.to}</Moment>
                )}
              </td>
              <td className="text-muted">{this.props.descripton}</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(EducationProfile);
