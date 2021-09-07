var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers

const auctioncreate = require("../controllers/auction/auctionCreate");
const auctionFindAll = require("../controllers/auction/auctionFindAll");
const auctionFindOne = require("../controllers/auction/auctionFindOne");
const auctionUpdate = require("../controllers/auction/auctionUpdate");
const auctionDelete = require("../controllers/auction/auctionDelete");

//  Routes
router.post("/create", auctioncreate);
router.get("/find", auctionFindAll);
router.get("/find/:id", auctionFindOne);
router.put("/update/:id", auctionUpdate);
router.delete("/delete/:id", auctionDelete);

module.exports = router;
