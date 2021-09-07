var express = require("express");
const router = express.Router();



//---------------------middleware--------------------------
// const auth = require("../middleware/auth");



// ------------------------- Add Controllers------------------------
const requirementCreate = require("../controllers/requirement/requirementCreate");
const requirementFind = require("../controllers/requirement/requirementFindAll");
const requirementFindOne = require("../controllers/requirement/requirementFindOne");
const requirementUpdate = require("../controllers/requirement/requirementUpdate");
const requirementDelete = require("../controllers/requirement/requirementDelete");



// ----------------------- Routes-------------------------------
router.post("/create",  requirementCreate);
router.get("/find",  requirementFind);
router.get("/find/:id",  requirementFindOne);
router.put("/update/:id", requirementUpdate);
router.delete("/delete/:id",  requirementDelete);

module.exports = router;
