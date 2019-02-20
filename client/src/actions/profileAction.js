//This action will hit api/profile/current and bring user's profile from token

import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  UPDATE_CURRENT_PROFILE,
  GET_PROFILES,
  SET_CURRENT_USER,
  EDIT_EXPERIENCE,
  EDIT_EDUCATION
} from "./types";

//get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/current")
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
//get current profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//create or update current user profile

export const registerCurrentProfile = (newProfile, history) => dispatch => {
  axios
    .post("/api/profile/update", newProfile)
    .then(res => {
      dispatch({
        type: UPDATE_CURRENT_PROFILE,
        payload: res.data
      });
    })
    .then(() => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
//edit experience in current profile
export const editExperience = (newExp, history) => dispatch => {
  axios
    .post("/api/profile/exp", newExp)
    .then(res => {
      dispatch({
        type: EDIT_EXPERIENCE,
        payload: res.data
      });
    })
    .then(() => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const editEducation = (newEdu, history) => dispatch => {
  axios
    .post("/api/profile/edu", newEdu)
    .then(res => {
      dispatch({
        type: EDIT_EDUCATION,
        payload: res.data
      });
    })
    .then(() => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//get all profiles
export const getAllProfiles = () => dispatch => {
  dispatch(setProfileLoading()); //makes loading state true
  axios
    .get("/api/profile/all")
    .then(res => {
      dispatch({
        type: GET_PROFILES, //make loading state false and loads profiles
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILES,
        payload: null
      });
    });
};

//delete account and profile

export const deleteProfile = (_id, history) => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile/delete/:id")
      .then(res => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        });
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  }
};

//delete experience from profile by id
export const deleteExp = _id => dispatch => {
  axios
    .delete(`/api/profile/exp/${_id}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
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
//delete education from profile by id
export const deleteEdu = _id => dispatch => {
  axios
    .delete(`/api/profile/edu/${_id}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
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
