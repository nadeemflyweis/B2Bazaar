const mongoose = require("mongoose");

const addSchema = new mongoose.Schema(
  {
    vendorObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessProfile",
    },

    tagObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
    productObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    bannerName: {
      type: String,
      require: true,
    },

    photo: {
      type: String,
    },

    desc: {
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

const Advertisement = mongoose.model("Advertisement", addSchema);

module.exports = Advertisement;
