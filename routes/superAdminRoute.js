var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const superAdminSignup = require("../controllers/superAdmin/superAdminSignup");
const superAdminLogin = require("../controllers/superAdmin/superAdminLogin");

const superAdminFind = require("../controllers/superAdmin/superAdminFind");
const superAdminFindOne = require("../controllers/superAdmin/superAdminFindOne");
const superAdminUpdate = require("../controllers/superAdmin/superAdminUpdate");
const superAdminDelete = require("../controllers/superAdmin/superAdminDelete");

//  Routes
router.get("/find", superAdminFind);
router.get("/find/:id", superAdminFindOne);
router.put("/update/:id", superAdminUpdate);
router.delete("/delete/:id", superAdminDelete);

//  User Logins
router.post("/login", superAdminLogin);
router.post("/signup", superAdminSignup);

module.exports = router;
