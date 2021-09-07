const Advertisement = require("../../modules/advertisement");

// Load input validations
const validateRegisterInput = require("../../validations/advertisementValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    vendorObjectId,
    productObjectId,
    tagObjectId,
    bannerName,
    photo,
    desc,
    status,
  } = req.body;

  const addv = new Advertisement({
    vendorObjectId: vendorObjectId,
    productObjectId: productObjectId,
    tagObjectId: tagObjectId,
    bannerName: bannerName,
    photo: photo,
    desc: desc,
    status: status,
  });
  addv
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
