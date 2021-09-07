const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    qty: {
      type: Number,
    },

    totalPrice: {
      type: String,
    },

    status: {
      type: String,
      require: true,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
