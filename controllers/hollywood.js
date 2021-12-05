//Import Models
const Hollywood = require ('../models/hollywood.js');

//Hollywood Controller
//Post a blog

exports.postHollywoodData = (req,res)=>{
    const blog=new Hollywood (req.body);
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
exports.getHollywoodData = (req,res) =>{
    Hollywood.find((err,blogs)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    });
}






