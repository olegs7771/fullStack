import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEdu } from "../../actions/profileAction";

class EducationProfile extends Component {
  handleDeleteEdu = _id => {
    this.props.deleteEdu(_id);
  };

  render() {
    return (
      <div className="container my-3 ">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-muted">School</th>
              <th className="text-muted">Degree</th>
              <th className="text-muted">Study</th>
              <th className="text-muted">Years</th>
              <th className="text-muted">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-muted">{this.props.school}</td>
              <td className="text-muted">{this.props.degree}</td>
              <td className="text-muted">{this.props.study}</td>
              <td>
                <Moment format="YYYY/MM/DD">{this.props.from}</Moment> -{" "}
                {this.props.to === null ? (
                  "present"
                ) : (
                  <Moment format="YYYY/MM/DD">{this.props.to}</Moment>
                )}
              </td>
              <td className="text-muted">{this.props.descripton}</td>
              <td>
                <button
                  className="btn btn-danger btn-small"
                  onClick={this.handleDeleteEdu.bind(this, this.props._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteEdu }
)(EducationProfile);
