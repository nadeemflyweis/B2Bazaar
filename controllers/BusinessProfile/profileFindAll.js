const Profile = require("../../modules/businessProfile");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Profile.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).json({
            msg: "Data may not present",
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error while retriving the data" });
      });
  } else {
    Profile.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
