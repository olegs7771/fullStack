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
    const { title, company, desc } = this.props;
    return (
      <div className=" my-4 ">
        {/* { Dashboard Experience Profile } */}

        <table className="table ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Years</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{company}</td>
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
                  onClick={this.handleDeleteExp.bind(this, this.props._id)}
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
  { deleteExp }
)(withRouter(ExperienceProfile));
