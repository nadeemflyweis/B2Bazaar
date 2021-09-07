const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema(
  {
    vendorObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessProfile",
    },
    productObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    tagObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
    title: {
      type: String,
    },

    photo: {
      type: String,
    },

    desc: {
      type: String,
    },
    sellingPrice: {
      type: String,
    },
    startingPrice: {
      type: String,
    },
    diffInBids: {
      type: String,
    },
    endingDate: {
      type: String,
    },
    productName: {
      type: String,
    },
    qty: {
      type: String,
    },
    warranty: {
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

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
