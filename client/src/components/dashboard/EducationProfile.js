import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEdu } from "../../actions/profileAction";

class EducationProfile extends Component {
  handleDeleteEdu = _id => {
    this.props.deleteEdu(_id);
  };

  render() {
    const { school, degree, study, from, to, desc } = this.props;
    return (
      <div className=" my-4 ">
        {/* { Dashboard Experience Profile } */}
        <table className="table ">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Study</th>
              <th>Years</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{school}</td>
              <td>{degree}</td>
              <td>{study}</td>
              <td>
                {" "}
                <Moment format="YYYY/MM/DD">{this.props.from}</Moment> -{" "}
                {this.props.to === null ? (
                  "present"
                ) : (
                  <Moment format="YYYY/MM/DD">{this.props.to}</Moment>
                )}
              </td>
              <td>{desc}</td>
              <td>
                {" "}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteEdu }
)(EducationProfile);
