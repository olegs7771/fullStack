import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputSocilaForm = ({
  name,

  type,
  value,
  placeholder,
  onChange,

  error,
  icon
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
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

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputSocilaForm.defaultProps = {
  type: "text"
};

InputSocilaForm.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // icon: PropTypes.string.Required,
  error: PropTypes.string,
  disabled: PropTypes.string
};

export default InputSocilaForm;
