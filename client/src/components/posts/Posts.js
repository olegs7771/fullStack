import React, { Component } from "react";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Posts extends Component {
  render() {
    return (
      <div>
        <div className="row m-auto">
          <div className="col-md-12">
            <PostForm />
            <PostFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
