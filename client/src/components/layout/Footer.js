import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center py-4">
        Copyright &copy;{new Date().getFullYear()} DevConnector
      </footer>
    );
  }
}
export default Footer;
