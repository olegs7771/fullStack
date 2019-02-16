import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postAction";

class CommentItem extends Component {
  handleDeleteComment = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;
    const { post } = this.props.post;

    return (
      <div>
        <div className="card card-body ">
          <div className="row">
            <div className="col-md-2">
              <img
                src={comment.avatar}
                alt=""
                className="rounded-circle"
                style={{ width: "40px" }}
              />
            </div>
            <div className="col-md-6">
              <div className="text-info">{auth.user.name}</div>
            </div>
          </div>
          <br />
          <p className="lead">{comment.text}</p>
        </div>
        {post.user === auth.user.id ? (
          <button className="btn btn-danger btn-sm mb-3 ">
            <span
              className="text-white"
              onClick={this.handleDeleteComment.bind(this, postId, comment._id)}
            >
              Delete
            </span>
          </button>
        ) : null}
      </div>
    );
  }
}
CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,

  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
