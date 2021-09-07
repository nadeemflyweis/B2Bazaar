const Addv = require("../../modules/advertisement");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Addv.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `data may not present`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    Addv.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
