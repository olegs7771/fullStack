import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";

class PostItem extends Component {
  render() {
    const { post, auth } = this.props;
    return (
      <div>
        <div className="card  my-3 py-2 px-2">
          <div className="row">
            <div className="col-md-1 col-2">
              <img
                src={post.avatar}
                alt=""
                style={{ width: "40px" }}
                className="rounded-circle"
              />
            </div>
            <div className="col-md-8 col-8">
              <span className="text-info">{post.name}</span> commented on{" "}
              <Moment format="D MMM YYYY">{post.date}</Moment>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <div className="card-text">{post.text}</div>
          </div>
          <div className="button-group">
            <button className="btn btn-light mr-1">
              <i className="fas fa-thumbs-up text-info " />
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button className="btn btn-light">
              <i className="fas fa-thumbs-down " />
            </button>
            <button className="btn btn-dark">
              <span className="text-white">Comments</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PostItem);
