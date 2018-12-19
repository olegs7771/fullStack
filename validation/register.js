const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must contain between 2-30 Characters";
  }
  return { errors, isValid: isEmpty(errors) };
};
