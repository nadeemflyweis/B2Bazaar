var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const advertisementCreate = require("../controllers/advertisement/advertisementCreate");
const advertisementFindAll = require("../controllers/advertisement/advertisementFindAll");
const advertisementFindOne = require("../controllers/advertisement/advertisementFindOne");
const advertisementUpdate = require("../controllers/advertisement/advertisementUpdate");
const advertisementDelete = require("../controllers/advertisement/advertisementDelete");

//  Routes
router.post("/create", advertisementCreate);
router.get("/find", advertisementFindAll);
router.get("/find/:id", advertisementFindOne);
router.put("/update/:id", advertisementUpdate);
router.delete("/delete/:id", advertisementDelete);

module.exports = router;
