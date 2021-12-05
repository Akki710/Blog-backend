//Imports
const express= require('express');
const router= express.Router();

//Controller Imports
const { getHollywoodData,postHollywoodData } = require('../controllers/hollywood.js');


//Routes
//Hollywood
//Route -> POST
router.post("/hollywood", postHollywoodData);

//Route -> GET
router.get("/hollywood" , getHollywoodData);


module.exports= router;