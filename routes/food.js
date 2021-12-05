//Imports
const express= require('express');
const router= express.Router();

//Controller Imports
const { getFoodData,postFoodData } = require('../controllers/food.js');


//Routes
//Food
//Route -> POST
router.post("/food", postFoodData);

//Route -> GET
router.get("/food" , getFoodData);


module.exports= router;