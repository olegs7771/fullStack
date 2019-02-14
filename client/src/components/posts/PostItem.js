import React, { Component } from "react";
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

  render() {
    console.log("render");

    const { post, auth } = this.props;

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
              <span className="text-info">{post.name}</span> commented on{" "}
              <Moment format="D MMM YYYY">{post.date}</Moment>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <div className="card-text">{post.text}</div>
          </div>
          <div className="button-group">
            <button
              className="btn btn-light mr-1"
              onClick={this.handleAddLike.bind(this, post._id)}
            >
              <i className="fas fa-thumbs-up text-info " />
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
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
