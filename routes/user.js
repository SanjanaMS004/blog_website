const express = require('express');
const Router = express.Router();
const Article = require('../models/article')

Router.get('/new',(req,res)=>{
    res.render('article/new');
});

Router.post('/',(req,res)=>{
    const article = new Article({
        image:req.body.image,
        title:req.body.title,
        des:req.body.des
    })
    article.save().then(()=>{
        res.redirect('/')
    })
})

module.exports=Router;