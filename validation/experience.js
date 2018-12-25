const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateExperienceInput(data) {
  //data.name can not be object!

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  let errors = "";

  //If Empty

  if (Validator.isEmpty(data.title)) {
    {
      errors = "Title can not be empty!";
    }
  }
  if (Validator.isEmpty(data.company)) {
    {
      errors = "Company can not be empty!";
    }
  }
  if (Validator.isEmpty(data.from)) {
    {
      errors = "From can not be empty!";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
