const CartDB = require("../../modules/cartModel");

module.exports = (req, res, next) => {
  const { productObjectId, qty, totalPrice, status } = req.body;

  const cart = new CartDB({
    productObjectID,
    qty,
    totalPrice,
    status,
  });
  cart
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data created successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
