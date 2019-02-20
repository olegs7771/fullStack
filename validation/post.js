const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validatePostInput(data) {
  //data.name can not be object!
  data.text = !isEmpty(data.text) ? data.text : "";
  let errors = {};

  if (data.text) {
    if (!Validator.isLength(data.text, { min: 3, max: 200 })) {
      errors.text = "text must contain at least 3 characters";
    }
  }
  if (Validator.isEmpty(data.text)) {
    errors.text = "Please write some comment";
  }

  return { errors, isValid: isEmpty(errors) };
};
