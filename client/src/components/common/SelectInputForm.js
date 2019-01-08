import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectInputForm = ({
  name,
  value,
  placeholder,
  onChange,
  info,
  error,
  disabled,
  options
}) => {
  //  const selectOptions= options.map()

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

SelectInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectInputForm;
