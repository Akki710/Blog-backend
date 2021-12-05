//Importing Data
const {galleryData} = require('../GalleryData/gallery.js');



//Home Controller

exports.gallery = (req,res)=>{
    res.json(galleryData);
}