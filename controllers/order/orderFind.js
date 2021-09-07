const asyncHandler = require("express-async-handler");
const Order = require("../../modules/OrderModel");

//getOrders
module.exports = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});
