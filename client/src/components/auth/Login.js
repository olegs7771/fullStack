import React, { Component } from "react";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password1: "",
    password2: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password1 } = this.state;
    return (
      <div className="register">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br />
            <div className="card">
              <div className="card-header text-center h4">Login</div>
              <div className="card-body">
                <div className="container">
                  <form onSubmit={this.onSubmitRegister}>
                    <div className="group-control group-control-lg">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        placeholder="Email..."
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="group-control group-control-lg">
                      <label>Password</label>
                      <input
                        type="text"
                        className="form-control"
                        name="password1"
                        value={password1}
                        placeholder="Password..."
                        onChange={this.onChange}
                      />
                    </div>

                    <br />
                    <input
                      type="submit"
                      className="btn btn-secondary btn-lg
                      "
                      value="Login"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
