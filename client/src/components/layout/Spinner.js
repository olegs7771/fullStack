import React from "react";
import spinner from "../../imgs/spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        style={{ width: "50px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
export default Spinner;
