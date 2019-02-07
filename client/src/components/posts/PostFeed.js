import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postAction";

class PostFeed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <div className="container my-5">
          <hr />
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">Posts Here</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostFeed);
