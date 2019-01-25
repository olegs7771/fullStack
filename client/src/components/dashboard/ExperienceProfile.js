import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExp } from "../../actions/profileAction";

class ExperienceProfile extends Component {
  //delete experience
  handleDeleteExp = _id => {
    console.log(_id);

    this.props.deleteExp(_id, this.props.history);
  };

  render() {
    return (
      <div className="container my-4 ">
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
              <td>
                <button
                  className="btn btn-danger btn-small"
                  onClick={this.handleDeleteExp.bind(this, this.props._id)}
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
  { deleteExp }
)(withRouter(ExperienceProfile));
