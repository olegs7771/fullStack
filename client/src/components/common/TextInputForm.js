import React from "react";
import classnames from "classnames";

const TextInputForm = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  info,
  error
}) => {
  return (
    <div className="group-control ">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <small className="form-text text-muted">{info}</small>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputForm.defaultProps = {
  type: "text"
};

export default TextInputForm;
