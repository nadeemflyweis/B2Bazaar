const ReqDB = require("../../modules/requirementModel");

// Load input validations
const validateRegisterInput = require("../../validations/requirementValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    userObjectId,
    tagObjectId,
    name,
    desc,
    image,
    status,
    city,
    stateName,
  } = req.body;

  const requirement = new ReqDB({
    userObjectId: userObjectId,
    tagObjectId: tagObjectId,
    name: name,
    desc: desc,
    image: image,
    status: status,
    city: city,
    stateName: stateName,
  });
  requirement
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
