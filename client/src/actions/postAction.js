import axios from "axios";

import {
  POST_LOADING,
  GET_POSTS,
  GET_POST,
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
// Add Like

export const addLike = id => dispatch => {
  axios
    .post(`api/posts/like/${id}`)
    .then(res => {
      dispatch(getPosts());
    })

    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
// Add Comment

export const addComment = (id, newComment) => dispatch => {
  axios
    .post(`/api/posts/comment/${id}`, newComment)
    .then(res => {
      dispatch({
        type: GET_POST,
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
// Remove Like

export const removeLike = id => dispatch => {
  axios
    .post(`api/posts/dislike/${id}`)
    .then(res => {
      dispatch(getPosts());
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

// Get  Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({
        type: GET_POST,
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
//Delete Comment by (post._id)
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => {
      dispatch({
        type: GET_POST,
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
