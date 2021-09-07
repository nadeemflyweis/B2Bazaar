const ProductDB = require("../../modules/productModel");

// ------------------Load input validations----------------------
const validateRegisterInput = require("../../validations/productValidation");

module.exports = (req, res, next) => {
  // -----------------Check Validation-------------------
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }
  const {
    name,
    sellerName,
    mrp,
    price,
    image,
    desc,
    status,
    screenSize,
    processor,
    ram,
    hardDisk,
    color,
    warranty,
    categoryObjectId,
    vendorObjectId,
    brandObjectId,
  } = req.body;

  var product = new ProductDB({
    name: name,
    sellerName: sellerName,
    mrp: mrp,
    price: price,
    image: image,
    desc: desc,
    screenSize: screenSize,
    processor: processor,
    ram: ram,
    hardDisk: hardDisk,
    color: color,
    warranty: warranty,
    vendorObjectId: vendorObjectId,
    categoryObjectId: categoryObjectId,
    brandObjectId: brandObjectId,
    status: status,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        msg: "Data Added successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
