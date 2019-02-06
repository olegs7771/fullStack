import React, { Component } from "react";
import { connect } from "react-redux";
import TextAreaForm from "../common/TextAreaForm";
import PropTypes from "prop-types";
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
    console.log("posted");

    e.preventDefault();
    const newPost = {};
    this.props.addPost(newPost);
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
      <div>
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
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
