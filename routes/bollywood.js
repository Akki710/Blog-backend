//Imports
const express= require('express');
const router= express.Router();

//Controller Imports
const { getBollywoodData,postBollywoodData } = require('../controllers/bollywood.js');


//Routes
//Bollywood
//Route -> POST
router.post("/bollywood", postBollywoodData);

//Route -> GET
router.get("/bollywood" , getBollywoodData);


module.exports= router;