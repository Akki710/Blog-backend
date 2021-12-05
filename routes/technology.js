//Imports
const express= require('express');
const router= express.Router();

//Controller Imports
const { getTechnologyData,postTechnologyData } = require('../controllers/technology.js');


//Routes
//Technology
//Route -> POST
router.post("/technology", postTechnologyData);

//Route -> GET
router.get("/technology" , getTechnologyData);


module.exports= router;