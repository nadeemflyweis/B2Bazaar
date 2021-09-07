const ProfileDB = require("../../modules/businessProfile");

// Load input validations
const validateRegisterInput = require("../../validations/profileValidation");

module.exports = (req, res, next) => {
  const { error, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(error);
  }

  const {
    vendorObjectId,
    ownerName,
    companyName,
    alternateContact,
    pincode,
    address,
    gstin,
    email,
    businessIntro,
    businessLogo,
    officeImage,
    status,
  } = req.body;
  // console.log("nody542771",req.body)

  const profile = new ProfileDB({
    vendorObjectId: vendorObjectId,
    ownerName: ownerName,
    companyName: companyName,
    alternateContact: alternateContact,
    pincode: pincode,
    address: address,
    gstin: gstin,
    email: email,
    businessIntro: businessIntro,
    businessLogo: businessLogo,
    officeImage: officeImage,
    status: status,
  });
  // console.log("profile%%%%",profile)

  profile
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
