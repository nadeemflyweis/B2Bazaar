const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    vendorObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessProfile",
    },

    categoryObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    brandObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },

    name: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
    },

    mrp: {
      type: String,
    },

    price: {
      type: String,
    },

    image: {
      type: String,
    },

    sellerName: {
      type: String,
    },

    screenSize: {
      type: String,
    },

    processor: {
      type: String,
    },

    ram: {
      type: String,
    },
    hardDisk: {
      type: String,
    },
    color: {
      type: String,
    },
    warranty: {
      type: String,
    },

    status: {
      type: String,
      require: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
