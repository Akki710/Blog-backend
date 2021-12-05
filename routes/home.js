//Imports
const express = require('express');
const router = express.Router();

//Controller Imports
const {gallery} = require('../controllers/home.js');

//Routes
//Gallery Route -> GET
router.get("/", gallery)


//Exports
module.exports=router;