const User = require("../../modules/vendorRegister");

// const { checkPassword, hashPassword } = require("../utils/password.util");
// const { createJwtToken } = require("../../utils/tokenUtil");

// --------------------- create new user ---------------------------------

module.exports = async (req, res, next) => {
  const { generateOTP, fast2sms } = require("../../utils/optUtil");
  try {
    let { phone } = req.body;

    // check duplicate phone Number
    const phoneExist = await User.findOne({ phone });

    if (phoneExist) {
      next({ status: 400, message: "PHONE_ALREADY_EXISTS_ERR" });
      return;
    }

    // create new user
    const createUser = new User({
      phone,
    });

    // save user

    const user = await createUser.save();

    res.status(200).json({
      type: "success",
      message: "Account created OTP sended to mobile number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phone,
      },
      next
    );
  } catch (error) {
    next(error);
  }
};
