const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

//Post Routes - simplified for now
//router.get("/:id", ensureAuth, postsController.getPost);

router.post("/addSquish", adminController.addSquish);

router.delete("/deleteSquish/:id", adminController.deleteSquish);

module.exports = router;
