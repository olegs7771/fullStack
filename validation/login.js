const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateLoginInput(data) {
  //data.name can not be object!

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  let errors = "";

  if (!Validator.isEmail(data.email)) {
    errors = "Wrong Email Format";
  }
  if (!Validator.isNumeric(data.password, { no_symbols: true })) {
    errors = "Please Use only Numbers 0-9";
  }

  //If Empty

  if (Validator.isEmpty(data.email)) {
    {
      errors = "Email can not be empty!";
    }
  }
  if (Validator.isEmpty(data.password)) {
    {
      errors = "Password can not be empty!";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
