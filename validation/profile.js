const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateProfileInput(data) {
  //data.name can not be object!
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  let errors = {};

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 chacters";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handale is required";
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }
  //Social Sites Validation

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) errors.website = "Not a Valid URL";
  }
  if (!isEmpty(data.wesite)) {
    if (!Validator.isURL(data.wesite)) errors.website = "Not a Valid URL";
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) errors.twitter = "Not a Valid URL";
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) errors.linkedin = "Not a Valid URL";
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) errors.facebook = "Not a Valid URL";
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) errors.instagram = "Not a Valid URL";
  }

  console.log(data);

  return { errors, isValid: isEmpty(errors) };
};
