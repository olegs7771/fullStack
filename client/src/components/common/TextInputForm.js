import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextInputForm = ({
  name,
  lable,
  type,
  value,
  placeholder,
  onChange,
  info,
  error
}) => {
  return (
    <div className="group-control mt-3 ">
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
TextInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string
};

export default TextInputForm;
