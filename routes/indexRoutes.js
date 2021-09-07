const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/user", require("./userRoute"));

router.use("/admin", require("./adminRoutes"));

router.use("/businessprofile", require("./businessProfile"));

router.use("/product", require("./productRoute"));

router.use("/category", require("./categoryRoute"));

router.use("/brand", require("./brandRoute"));

router.use("/requirement", require("./requirement"));

router.use("/auction", require("./auctionRoute"));

router.use("/cart", require("./cartRoute"));

router.use("/order", require("./orderRoute"));

// ------------------- Exporting --------------------
module.exports = router;
