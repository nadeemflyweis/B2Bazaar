const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/user", require("./userRoute"));

router.use("/superadmin", require("./superAdminRoute"));

router.use("/admin", require("./adminRoutes"));

router.use("/vendor", require("./vendorRoute"));

router.use("/businessprofile", require("./businessProfile"));

router.use("/product", require("./productRoute"));

router.use("/category", require("./categoryRoute"));

router.use("/brand", require("./brandRoute"));

router.use("/requirement", require("./requirement"));

router.use("/auction", require("./auctionRoute"));

router.use("/add", require("./advertisement"));

router.use("/cart", require("./cartRoute"));

router.use("/order", require("./orderRoute"));

// ------------------- Exporting --------------------
module.exports = router;
