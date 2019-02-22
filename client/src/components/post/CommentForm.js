import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextAreaForm from "../common/TextAreaForm";

import { addComment } from "../../actions/postAction";

class CommentForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { id } = this.props;

    const newComment = {
      text
    };
    this.props.addComment(id, newComment);
    this.setState({ text: "" });
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
        <div className="text-center h4">Add Comment</div>
        <form onSubmit={this.onSubmit}>
          <TextAreaForm
            name="text"
            value={text}
            placeholder="Your comment Here..."
            onChange={this.onChange}
            info="You can share your comment with everyone"
            error={errors.text}
          />
          <div className="mx-auto">
            <button className="btn btn-dark mx-auto d-block my-3" type="submit">
              Add Comment
            </button>
          </div>
        </form>
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
  { addComment }
)(withRouter(CommentForm));
