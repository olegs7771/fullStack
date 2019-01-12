//This action will hit api/profile/current and bring user's profile from token

import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  UPDATE_CURRENT_PROFILE,
  GET_PROFILES
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

//get all profiles
export const getAllProfiles = () => dispatch => {
  axios
    .get("/api/profile/all")
    .then(res => {
      dispatch({
        type: GET_PROFILES,
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
//delete profile by id
export const deleteProfile = () => {};
