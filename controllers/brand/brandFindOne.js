const Brand = require("../../modules/brandModel");
module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    Brand.findById(id)
      .populate("Vendor")
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Brand  may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    Brand.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
