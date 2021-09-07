const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    vendorObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessProfile",
    },

    name: {
      type: String,
      require: true,
    },

    logo: {
      type: String,
    },

    post: {
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

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
