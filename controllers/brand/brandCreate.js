const BrandDB = require("../../modules/brandModel");

// Load input validations
const validateRegisterInput = require("../../validations/brandValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, logo, post, status, vendorObjectId } = req.body;

  const brand = new BrandDB({
    vendorObjectId: vendorObjectId,
    name,
    logo,
    post,
    status,
  });
  brand
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
