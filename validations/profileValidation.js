const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.ownerName = !isEmpty(data.ownerName) ? data.ownerName : "";
  data.companyName = !isEmpty(data.companyName) ? data.companyName : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.ownerName)) {
    error.ownerName = "Enter your name first!!";
  }

  if (Validator.isEmpty(data.companyName)) {
    error.companyName = "Enter company name first!!";
  }

  if (Validator.isEmpty(data.email)) {
    error.email = "E-mail field is required";
  }
  if (!Validator.isEmail(data.email)) {
    error.email = "must be a valid Email";
  }
  return {
    error,
    isValid: isEmpty(error),
  };
};
