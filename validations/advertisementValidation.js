const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.bannerName = !isEmpty(data.bannerName) ? data.bannerName : "";

  if (Validator.isEmpty(data.bannerName)) {
    error.bannerName = "bannerName field is required";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
