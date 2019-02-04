const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateExperienceInput(data) {
  //data.name can not be object!

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  let errors = {};

  //If Empty

  if (Validator.isEmpty(data.title)) {
    {
      errors.title = "Title can not be empty!";
    }
  }
  if (Validator.isEmpty(data.company)) {
    {
      errors.company = "Company can not be empty!";
    }
  }
  if (Validator.isEmpty(data.from)) {
    {
      errors.from = "From can not be empty!";
    }
  }

  //Valid Format Validator

  if (Validator.isDataURI(data.from)) {
    errors.from = "Please use valid format e.g. (6.30.2010)";
  }
  return { errors, isValid: isEmpty(errors) };
};
