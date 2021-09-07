const mongoose = require("mongoose");

const reqSchema = new mongoose.Schema(
  {
    userObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tagObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },

    name: {
      type: String,
    },

    desc: {
      type: String,
    },

    image: {
      type: String,
    },

    city: {
      type: String,
    },

    stateName: {
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

const Requirement = mongoose.model("Requirement", reqSchema);

module.exports = Requirement;
