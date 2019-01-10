import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectInputForm = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  options,
  type
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="group-control mt-2 ">
      <select
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        {selectOptions}
      </select>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectInputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

SelectInputForm.defaultProps = {
  type: "text"
};

export default SelectInputForm;
