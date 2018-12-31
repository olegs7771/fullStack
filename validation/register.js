const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  //data.name can not be object!
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password1 = !isEmpty(data.password1) ? data.password1 : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  let errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must contain between 2-30 Characters";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Wrong Email Format";
  }
  if (!Validator.isNumeric(data.password1, { no_symbols: true })) {
    errors.password1 = "Please Use only Numbers 0-9";
  }

  if (!Validator.equals(data.password2, data.password1)) {
    errors.password2 = "Password not match";
  }

  //If Empty
  if (Validator.isEmpty(data.name)) {
    {
      errors.name = "Name can not be empty!";
    }
  }
  if (Validator.isEmpty(data.email)) {
    {
      errors.email = "Email can not be empty!";
    }
  }
  if (Validator.isEmpty(data.password1)) {
    {
      errors.password1 = "Password can not be empty!";
    }
  }

  return { errors };
};
