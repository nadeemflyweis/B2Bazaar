const ReqDB = require("../../modules/requirementModel");
module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    ReqDB.findById(id)
      .populate("Vendor")
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `data  may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    ReqDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
