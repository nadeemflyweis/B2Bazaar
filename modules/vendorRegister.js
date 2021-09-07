const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      require: true,
      unique: true,
    },

    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
