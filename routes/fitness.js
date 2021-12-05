//Imports
const express= require('express');
const router= express.Router();

//Controller Imports
const { getFitnessData,postFitnessData } = require('../controllers/fitness.js');


//Routes
//Fitness
//Route -> POST
router.post("/fitness", postFitnessData);

//Route -> GET
router.get("/fitness" , getFitnessData);


module.exports= router;