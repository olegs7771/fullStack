import axios from "axios";

import {
  POST_LOADING,
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_ERRORS
} from "./types";

// Add Post

export const addPost = newPost => dispatch => {
  axios
    .post("/api/posts/newpost", newPost)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
// Get  Posts

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: GET_POSTS,
        payload: null
      });
    });
};
//set post loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

//Delete Post by (post._id)
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
