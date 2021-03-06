import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextAreaForm from "../common/TextAreaForm";

import { addPost } from "../../actions/postAction";

class PostForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddPost = e => {
    const { text } = this.state;

    const newPost = {
      text
    };
    this.props.addPost(newPost, this.props.history);
    console.log(newPost);
  };

  static getDerivedStateFromProps(props, state) {
    if (state.errors !== props.errors) {
      return {
        errors: props.errors
      };
    }
    return null;
  }

  render() {
    const { text, errors } = this.state;
    return (
      <div className="my-2">
        <div className="text-center h4">Compose Post</div>
        <TextAreaForm
          name="text"
          value={text}
          placeholder="Your Post Here..."
          onChange={this.onChange}
          info="You can share your post with everyone"
          error={errors.text}
        />
        <div className="mx-auto">
          <button
            className="btn btn-dark mx-auto d-block my-3"
            onClick={this.handleAddPost}
          >
            Send Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addPost }
)(withRouter(PostForm));
