const asyncHandler = require("express-async-handler");
const Order = require("../../modules/OrderModel");

//getOrderByID
module.exports = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});
