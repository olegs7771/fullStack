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
    const { title, company, from, to, desc, _id } = this.props;
    return (
      <div className="container my-4 ">
        {/* { Dashboard Experience Profile } */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item borderless">
            <span className="text-muted h6">Title :</span> <span>{title}</span>
          </li>
          <li className="list-group-item borderless">
            <span className="text-muted h6">Company :</span>{" "}
            <span>{company}</span>
          </li>
          <li className="list-group-item borderless">
            <span className="text-muted h6">Years :</span>{" "}
            <span>
              {" "}
              <Moment format="YYYY/MM/DD">{this.props.from}</Moment> -{" "}
              {this.props.to === null ? (
                "present"
              ) : (
                <Moment format="YYYY/MM/DD">{this.props.to}</Moment>
              )}
            </span>
          </li>
          <li className="list-group-item borderless">
            <span className="text-muted h6">Description :</span>{" "}
            <span>{desc}</span>
          </li>
          <li className="list-group-item borderless">
            <button
              className="btn btn-danger btn-small"
              onClick={this.handleDeleteExp.bind(this, this.props._id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteExp }
)(withRouter(ExperienceProfile));
