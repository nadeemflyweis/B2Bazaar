const Auction = require("../../modules/auctionModel");

module.exports = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Auction.findById(id)
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
    Auction.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
  }
};
