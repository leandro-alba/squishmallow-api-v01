const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");
//const postsController = require("../controllers/posts");




//Main Routes - simplified for now
router.get("/", homeController.getIndex);


//router.get('/add-a-squish',, postsController.getAddAQuestion)



module.exports = router;
