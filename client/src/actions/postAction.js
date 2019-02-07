import axios from "axios";

import {
  POST_LOADING,
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_ERRORS
} from "./types";

// Add Post

export const addPost = (newPost, history) => dispatch => {
  axios
    .post("/api/posts/newpost", newPost)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .then(() => history.push("/post_success"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
