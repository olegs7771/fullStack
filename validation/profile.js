const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateProfileInput(data) {
  //data.name can not be object!
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  let errors = "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 chacters";
  }
  if (Validator.isEmpty(data.handle)) {
    errors = "Profile handale is required";
  }
  if (Validator.isEmpty(data.status)) {
    errors = "Status field is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors = "Skills field is required";
  }
  //Social Sites Validation

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) errors = "Not a Valid URL";
  }
  if (!isEmpty(data.wesite)) {
    if (!Validator.isURL(data.wesite)) errors = "Not a Valid URL";
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) errors = "Not a Valid URL";
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) errors = "Not a Valid URL";
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) errors = "Not a Valid URL";
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) errors = "Not a Valid URL";
  }
  //Experience

  if (!isEmpty(data.title)) {
    if (!Validation.isEmpty(data.title)) {
      errors = "Require Title field";
    }
  }
  if (!isEmpty(data.company)) {
    if (!Validation.isEmpty(data.company)) {
      errors = "Please Fill Company";
    }
  }
  if (!isEmpty(data.location)) {
    if (!Validation.isEmpty(data.location)) {
      errors = "Require Location field";
    }
  }
  if (!isEmpty(data.from)) {
    if (!Validation.isNum(data.from)) {
      errors = "Require From field";
    }
  }
  if (!isEmpty(data.to)) {
    if (!Validation.isNum(data.to)) {
      errors = "Require To field";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
