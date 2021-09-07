const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    contact: {
      type: String,
    },

    address: {
      type: String,
    },

    stateName: {
      type: String,
    },

    pincode: {
      type: String,
    },

    country: {
      type: String,
      default: "INDIA",
    },
  },
  { timestamps: true }
);

const AdminDB = mongoose.model("AdminDB", adminSchema);
module.exports = AdminDB;
