import React from "react";
import classnames from "classnames";

const TextAreaForm = ({
  name,

  value,
  placeholder,
  onChange,
  info,
  error
}) => {
  return (
    <div className="group-control ">
      <textarea
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
TextInputForm.propTypes = {
  name: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaForm;
