var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers

const profilecreate = require("../controllers/BusinessProfile/profileCreate");
const profileFindAll = require("../controllers/BusinessProfile/profileFindAll");
const profileFindOne = require("../controllers/BusinessProfile/profileFindOne");
const profileUpdate = require("../controllers/BusinessProfile/profileUpdate");
const profileDelete = require("../controllers/BusinessProfile/profileDelete");

//  Routes
router.post("/create", profilecreate);
router.get("/find", profileFindAll);
router.get("/find/:id", profileFindOne);
router.put("/update/:id", profileUpdate);
router.delete("/delete/:id", profileDelete);

module.exports = router;
