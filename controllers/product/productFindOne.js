const ProductDB = require("../../modules/productModel");

module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    ProductDB.findById(id)
      .populate("vendorObjectID", "categoryObjectID", "brandObjectID")

      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Data may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    ProductDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
