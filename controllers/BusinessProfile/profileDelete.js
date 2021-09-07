const Profile = require("../../modules/businessProfile");

module.exports = (req, res) => {
  const id = req.params.id;

  Profile.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          msg: "Cannot delete, maybe something is wrong",
        });
      } else {
        res.send({
          msg: "data deleted successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data",
      });
    });
};
