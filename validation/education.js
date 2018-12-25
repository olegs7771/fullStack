const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateEducationInput(data) {
  //data.name can not be object!

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  let errors = "";
  console.log(data);

  //If Empty

  if (Validator.isEmpty(data.school)) {
    {
      errors = "School can not be empty!";
    }
  }
  if (Validator.isEmpty(data.degree)) {
    {
      errors = "Degree can not be empty!";
    }
  }
  if (Validator.isEmpty(data.from)) {
    {
      errors = "From can not be empty!";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
