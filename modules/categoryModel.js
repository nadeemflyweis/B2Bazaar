const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    vendorObjectId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BusinessProfile",
      },
    ],

    name: {
      type: String,
      require: true,
    },

    image: {
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

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
