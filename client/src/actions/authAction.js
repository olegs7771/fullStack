import { GET_ERRORS, SET_CURRENT_USER, CLEAR_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login User---> Get User Token

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      // Set to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to auth header as we did in postman
      setAuthToken(token); //we must create this function in separate file.

      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded)); // we must set this user
    })
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//set current user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//clear current user
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};

//Logout user

export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth header for future requests
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
