const Vendor = require("../../modules/vendorRegister");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Vendor.findById(id)
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
    Vendor.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
