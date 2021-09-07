const Category = require("../../modules/categoryModel");

module.exports = (req, res) => {
  const id = req.params.id;

  Category
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete Maybe something is wrong` });
      } else {
        res.send({
          message: "Category is deleted successfully!",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Category",
      });
    });
};
