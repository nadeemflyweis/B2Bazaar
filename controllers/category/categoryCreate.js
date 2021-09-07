const Category = require("../../modules/categoryModel");

// Load input validations
const validateRegisterInput = require("../../validations/categoryValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, image, status, desc, vendorObjectId } = req.body;

  const category = new Category({
    vendorObjectId: vendorObjectId,
    name: name,
    image: image,
    desc: desc,
    status: status,
  });
  category
    .save(category)
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
