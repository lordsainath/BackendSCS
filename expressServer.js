const express = require('express')
// console.log(express)
// console.log(typeof express)

const expressServer = express();
// console.log(expressServer)
// console.log(typeof expressServer)


// MiddleWare
// custom middleware
expressServer.use((req,res,next)=>{
     console.log('we are using middleware')
     return next();
})

// third party middlware
// morgon
const morgan = require('morgan')
expressServer.use(morgan('dev'));

// built in middlewares
expressServer.use(express.json())
expressServer.use(express.urlencoded({extended:true}))



expressServer.use(express.static('public'))

// defining the view engine
expressServer.set('view engine','ejs')


// Homepage
// rendering the html using server
expressServer.get("/",(req,res)=>{
    // res.send("hello buddy, server started using express")
    res.render('home')
})

// creating similar routes diff paths

expressServer.get("/about",(req,res)=>{
    res.render('about')
})
expressServer.get("/profile",(req,res)=>{
    res.render('profile')
})


// here we are using specific route middleware
expressServer.get("/form",(req,res,next)=>{
    console.log("i am middleware of specific form")
    next();
},(req,res)=>{
    res.render('Form')
})


// route for receiving the data

// get method for receiving the data
// expressServer.get('/getformData',(req,res)=>{
//     console.log(req.query)
//     console.log('form is submitted')
//     res.send("form is submitted")
// })

// post method for receiving the data
expressServer.post('/getformData',(req,res)=>{
    console.log(req.body)
    res.send("form is submitted")
})


expressServer.listen(3000)