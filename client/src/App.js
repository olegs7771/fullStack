import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//setting localStorage for storing currentUser
import jwt_decode from "jwt-decode"; //decode token
import setAuthToken from "./utils/setAuthToken"; // setting  token to header as Authorization( like in postman)
import { setCurrentUser } from "./actions/authAction"; //will send action to set state auth.user:{}
import { clearCurrentProfile } from "./actions/profileAction";

//redux
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
// redux-auth-wrapper
import { connectedRouterRedirect } from "redux-auth-wrapper";

// const userIsAuthenticated = connectedRouterRedirect({
//   // The url to redirect user to if they fail
//   redirectPath: "/login",
//   // If selector is true, wrapper will not redirect
//   // For example let's check that state contains user data
//   authenticatedSelector: state => state.user.data !== null,
//   // A nice display name for this check
//   wrapperDisplayName: "UserIsAuthenticated"
// });

//check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set currentUser to auth.user in redux state and  Authenticate
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
