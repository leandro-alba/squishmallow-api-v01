const express = require("express");
const home = require("../controllers/home");
const router = express.Router();

const homeController = require("../controllers/home");
//const postsController = require("../controllers/posts");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get('/admin', homeController.getAdmin);

//router.get('/add-a-squish',, postsController.getAddAQuestion)

//Api routes
router.get('/api/:id', homeController.getApiById)//works perfectly
router.get('/api/name/:name', homeController.getApiName)
router.get('/api', homeController.getApi)//get all squishes lmao
//router.get('/api/random', homeController.getRandom)//get random squishes here. 5 limit
//router.get('/api/collect-num/:collectorNumber', homeController.getApiCollectNum)//get squish from collector number 
//router.get('/api/squishdate/:releaseDate', homeController.getApiReleaseDate)//get squish by release date aka squish date XD
module.exports = router;
