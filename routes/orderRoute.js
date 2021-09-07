var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const orderCreate = require("../controllers/order/orderCreate");
const orderFind = require("../controllers/order/orderFind");
const orderFindOne = require("../controllers/order/orderFindOne");
const orderUpdate = require("../controllers/order/orderUpdate");
const orderDelete = require("../controllers/order/orderDelete");

//  Routes
router.post("/create",  orderCreate);
router.get("/find",  orderFind);
router.get("/find/:id",  orderFindOne);
router.put("/update-payment/:id/pay",  orderUpdate);
router.delete("/delete/:id",  orderDelete);

module.exports = router;
