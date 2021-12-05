//Import Models
const Technology = require ('../models/technology.js');

//Technology Controller
//Post a blog

exports.postTechnologyData = (req,res)=>{
    const blog=new Technology (req.body);
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
exports.getTechnologyData = (req,res) =>{
    Technology.find((err,blogs)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    });
}






