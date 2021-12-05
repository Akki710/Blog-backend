//Imports
const mongoose= require('mongoose');
const {Schema} = mongoose;


const technologySchema= new Schema({
    imageUrl:{
        type: String,
        required:true,
        trim:true
    },
    title:{
        type:String,
        required:true
    },
    paraOne:{
        type:String
    },
    paraTwo:{
        type:String
    },
    shortPara:{
        type:String
    },
    category:String,
    date:String,
    item:Number,
    tagOne:String,
    tagTwo:String,
    tagThree:String,
    author:{
        type:String,
        required:true
    },
    rank:String
},{timestamps:true});


module.exports = mongoose.model("Technology" , technologySchema);
