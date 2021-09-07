const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.name)) {
    error.name = "Name field is required";
  }

  if (Validator.isEmpty(data.price)) {
    error.price = "must be a valid price";
  }


  return {
    error,
    isValid: isEmpty(error),
  };
};
