import { GET_ERRORS } from "./types";
import axios from "axios";

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

export const loginUser = userData => dispatch => {
  axios
    .post("/api/user/login", userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      //
    })
    .catch({
      type: GET_ERRORS,
      payload: err.response.data
    });
};
