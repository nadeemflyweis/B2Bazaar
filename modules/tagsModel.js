const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema(
  {
    vendorObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessProfile",
    },

    name: {
      type: String,
      require: true,
    },

    status: {
      type: String,
      require: true,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Tag = mongoose.model("Tag", tagsSchema);

module.exports = Tag;
