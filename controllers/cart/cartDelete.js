const CartDB = require("../../modules/cartModel");

module.exports = (req, res) => {
  CartDB.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete. Maybe something is wrong` });
      } else {
        res.send({
          message: "Data deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete",
      });
    });
};
