const mongoose = require('mongoose');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("Article",articleSchema)