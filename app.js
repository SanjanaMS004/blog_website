const express = require('express');  
const path = require('path');

const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const Article = require('./models/article')

//route
const userRouters = require('./routes/user');

const app = express(); 
const port = 5000; 

//mongoose
mongoose.connect("mongodb://127.0.0.1:27017/BlogContent").then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database can't be connected")
})

//port
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.use(expressLayouts);
app.set('view engine','ejs');

//route
app.get('/', async(req,res)=>{
    const article = await Article.find();
    // console.log(article)
    res.render('index',{article:article});
});


//body-parse
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//userRouter
app.use('/article',userRouters);

app.listen(port, () => {
    console.log('Server is running at http://localhost:'+port);
});

