const Auction = require("../../modules/auctionModel");

// Load input validations
const validateRegisterInput = require("../../validations/auctionValidation");

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
    title,
    photo,
    desc,
    sellingPrice,
    startingPrice,
    diffInBids,
    endingDate,
    productName,
    qty,
    warranty,
    status,
  } = req.body;

  const auct = new Auction({
    vendorObjectId: vendorObjectId,
    productObjectId: productObjectId,
    tagObjectId: tagObjectId,
    title: title,
    photo: photo,
    desc: desc,
    sellingPrice: sellingPrice,
    startingPrice: startingPrice,
    diffInBids: diffInBids,
    endingDate: endingDate,
    productName: productName,
    qty: qty,
    warranty: warranty,
    status: status,
  });
  auct
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
