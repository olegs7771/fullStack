import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //if token not out there than we want to delete token
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
