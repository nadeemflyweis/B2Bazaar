var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const brandCreate = require("../controllers/brand/brandCreate");
const brandFind = require("../controllers/brand/brandFind");
const brandFindOne = require("../controllers/brand/brandFindOne");
const brandUpdate = require("../controllers/brand/brandUpdate");
const brandDelete = require("../controllers/brand/brandDelete");

//  Routes
router.post("/create",  brandCreate);
router.get("/find",  brandFind);
router.get("/find/:id",  brandFindOne);
router.put("/update/:id",  brandUpdate);
router.delete("/delete/:id",  brandDelete);

module.exports = router;
