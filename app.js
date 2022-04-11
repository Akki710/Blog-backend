//Imports
const express= require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');


//Route Imports
const homeRoute= require('./routes/home.js');
const bollywoodRoute= require('./routes/bollywood.js');
const hollywoodRoute= require('./routes/hollywood.js');
const fitnessRoute= require('./routes/fitness.js');
const foodRoute= require('./routes/food.js');
const technologyRoute= require('./routes/technology.js');

//Calling express method
const app=express();

//PORT
const PORT=process.env.PORT || 5000;


//DB connection
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("Database Connected!!")})
.catch((err)=>{console.log(err)});

//Middleware
app.use(express.json());
app.use(cors());



//Routes
app.use("/api" , homeRoute);
app.use("/api" , bollywoodRoute);
app.use("/api" , hollywoodRoute);
app.use("/api" , fitnessRoute);
app.use("/api" , foodRoute);
app.use("/api" , technologyRoute);



//Listening to port
app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
});
