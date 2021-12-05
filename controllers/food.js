//Import Models
const Food = require ('../models/food.js');

//Food Controller
//Post a blog

exports.postFoodData = (req,res)=>{
    const blog=new Food (req.body);
    blog.save((err,blog)=>{
        if(err){
            return res.status(400).json({
                err:"unable to save blog in Database"
            });
        }
        res.status(200).json(blog);
    });
}


//Get All blogs
exports.getFoodData = (req,res) =>{
    Food.find((err,blogs)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    });
}






