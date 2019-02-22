import React, { Component } from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deletePost, addLike, removeLike } from "../../actions/postAction";

class PostItem extends Component {
  handleDeletePost = id => {
    this.props.deletePost(id);
  };

  //Add Like
  handleAddLike = id => {
    this.props.addLike(id);
  };
  //Remove Like
  handleRemoveLike = id => {
    this.props.removeLike(id);
  };
  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div>
        <div className="card  my-3 py-2 px-2">
          <div className="row">
            <div className="col-md-1  col-2">
              <img
                src={post.avatar}
                alt=""
                style={{ width: "40px" }}
                className="rounded-circle"
              />
            </div>
            <div className="col-md-8 col-8">
              <span className="text-info">{post.name}</span> posted on{" "}
              <Moment format="D MMM YYYY">{post.date}</Moment>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <div className="card-text">{post.text}</div>
          </div>
          {showActions ? (
            <div className="button-group">
              {/* {Add Like} */}
              <button
                className="btn btn-light mr-1"
                onClick={this.handleAddLike.bind(this, post._id)}
              >
                <i
                  className={classnames("fas fa-thumbs-up", {
                    "text-info": this.findUserLike(post.likes)
                  })}
                />
                <span className="badge badge-light">{post.likes.length}</span>
              </button>
              <button
                className="btn btn-light"
                onClick={this.handleRemoveLike.bind(this, post._id)}
              >
                <i className="fas fa-thumbs-down " />
              </button>
              <Link to={`/post/${post._id}`}>
                <button className="btn btn-dark ml-1">
                  <span className="text-white">Comments</span>
                </button>
              </Link>
              {post.user === auth.user.id ? (
                <button className="btn btn-danger ml-1">
                  <span
                    className="text-white"
                    onClick={this.handleDeletePost.bind(this, post._id)}
                  >
                    Delete
                  </span>
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
