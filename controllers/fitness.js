//Import Models
const Fitness = require ('../models/fitness.js');

//Fitness Controller
//Post a blog

exports.postFitnessData = (req,res)=>{
    const blog=new Fitness (req.body);
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
exports.getFitnessData = (req,res) =>{
    Fitness.find((err,blogs)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    });
}






