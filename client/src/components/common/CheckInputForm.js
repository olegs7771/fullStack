import React from "react";

const CheckInputForm = ({ checked, onChange, type, name }) => {
  return (
    <div>
      <div className="row">
        <div className="form-group form-check col">
          <input
            name={name}
            type={type}
            className="form-check-input "
            checked={checked}
            onChange={onChange}
          />
          <label className="form-check-label">yes</label>
        </div>
      </div>
    </div>
  );
};

CheckInputForm.defaultProps = {
  type: "checkbox"
};

export default CheckInputForm;
