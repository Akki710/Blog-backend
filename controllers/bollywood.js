//Import Models
const Bollywood = require ('../models/bollywood.js');

//Bollywood Controller
//Post a blog

exports.postBollywoodData = (req,res)=>{
    const blog=new Bollywood (req.body);
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
exports.getBollywoodData = (req,res) =>{
    Bollywood.find((err,blogs)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    });
}






