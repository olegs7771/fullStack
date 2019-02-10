import React, { Component } from "react";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../layout/Spinner";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/postAction";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;

    let postContent;

    if (posts === null && loading) {
      postContent = <Spinner />;
    } else {
      // {posts state got posts from db}
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div>
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <PostForm />
            </div>
            <div className="col-md-6">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}
Posts.propTypes = {
  post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
