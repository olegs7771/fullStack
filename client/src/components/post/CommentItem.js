import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postAction";
import Moment from "react-moment";

class CommentItem extends Component {
  handleDeleteComment = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;
    const { post } = this.props.post;

    return (
      <div>
        <div className="card  my-3">
          <div className="card-heading">
            <div className="row">
              <div className="col-md-2 col-2">
                <img
                  src={comment.avatar}
                  alt=""
                  className="rounded-circle py-3 px-2"
                  style={{ width: "50px" }}
                />
              </div>
              <div className="col-md-6 col-8">
                <div className="text-info py-3">{comment.name}</div> commented
                on <Moment format="D MMM YYYY">{post.date}</Moment>
              </div>
            </div>
          </div>
          <hr />
          <div className="card-body">
            <p className="lead">{comment.text}</p>
          </div>
          {comment.name === auth.user.name ? (
            <button className="btn btn-danger btn-sm ">
              <span
                className="text-white"
                onClick={this.handleDeleteComment.bind(
                  this,
                  postId,
                  comment._id
                )}
              >
                Delete
              </span>
            </button>
          ) : null}
        </div>
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
