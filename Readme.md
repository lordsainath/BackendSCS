Date:- 22/10/2025

// First We initialized the folder by using npm init.We also created Readme.md file to write down the notes.

<!-- package -->
- Package is a resuable code which is written by another developer which will help another developers to write the code fastly.

<!-- Installing cat-me -->
- To understand Package we are installing the cat-me package from npm website
- cmd - npm i cat-me
- Cat-me package is used to randomly generate cat's in ASCII FORMAT

<!-- Installing random-cat-img-->
- Here we are exploring package where we can generate random cat images
- cmd - npm i random-cat-img

<!--Installing Ccat-names -->
- This package is used to get popular cat names along with generate random cat names
- cmd - npm i cat-names

<!-- Creating Server using http  -->
- first we are going to require('http') package
- creating server using createServer() with callback function which includes req & res
-  res.end("Hello Server")
- to run the server we have to listen to the server by providing the port number
- we are also started to learn the routing in http server - (req.url) - condition
- we also learn to how to use nodemon


<!-- Express -->
- cmd - npm i express
- we require it in the file also call the function
- after that we create some routes using get also listen to the server

- after that we wanted to render html so to do so we have to set the view-engine (there are many types  of view engine)
- we are using ejs - cmd npm i ejs
- app.set('view engine','ejs')
- so if we are using ejs we have to create a views folder where we keep our html files
- we have to use render method insted of send method


<!-- Middlewars -->
- we started to know about middleware also we created using app.use where we have to pass the three arugments in callback function.
- multiple types- custome,built-in, thirdParty middlewares

- first we created custom middleware using use
- we installed third party middleware which is morgan. we required morgan
- expressServer.use(morgan('dev'));

- if we have to create a middleware for specific route we have to pass in the route also provide a three arg.

<!-- Form controls -->
- we have created a form and submit button
- after that we have to create a route to receive the data
- if we are using get method we can see the data in object so we have to use req.url
- also we have to define the name for each field to receive the data
- if we are using post method we can see the data using req.body
- but we have to use the two middlwares to read the data in req.body which are built in middlewares
- built in middlewares
- expressServer.use(express.json())
- expressServer.use(express.urlencoded({extended:true}))

<!-- How to link css to the frontend -->
- first we creat a public folder and there we create multiple folders such as images, stylesheets,javascritps . include the stylsheet in it to render anything we have to pass it from backend to do so we have to expressServer.use(express.static('public'))



Date :- 23/10/2025 ✅

<!-- Harsh bhaiya YT :- Backend The Endgamepart 1 -->

- first we started with revising old classes for creating route and rendering page with css.we created task1 and perform all the tasks.

- We have to do a lot of setup work when creating a new Express project, which means writing all the code and setting up everything each time. To save this time, we can use Express Generator — it automatically creates the folder structure and basic code for the project.

- express generator 
  - we installed express-generator globally
  - npm i express-generator -g
  - then create a new app using 
  - express appName --view=ejs
  - after that install all the dependencies -  npm i 

- after that we started to learn about mongodb where we first installed the mongodb from the browswer after that we installed mongoose in our backend folder
- we also learned about mongodb what is db, what is model and collection, what is scheme and document.
-  after that we started to connect the backend with mongodb 
- npm i mongoose
- require and setup the files
- const mongoose = require("mongoose");
- mongoose.connect("mongodb://127.0.0.1:27017/practicing");
- after that we created a userScheme mongoose.Scheme({});
- after that we created and export  a modle mongoose.Model('modelName',schema)
- module.exports = mongoose.model("userModels", userSchema);
- after that we started to create, read, delete document in model
- method such as model.create({}),model.find(),findOne(filter);findOneAndDelete(filter).
- after that we started with learning about cookies and session.



  Date : 24/10/2025
  <!-- Revising all the concepts -->

  - Revised all the concepts of last class along with implementation and notes.
  - created form in ejs to create user and implemented some operation along with this method countDocuments(),deleteMany({})

  - Here i installed a new package for summarizing all the endpoints in our index.js
   - npm i express-list-endpoints
   - requrie it and console.log
   - const listEndpoints = require('express-list-endpoints');
   - const endpoints = listEndpoints(router);
   - console.log(endpoints);




- here we implemented the cookies and session
 - first we installed npm i express-session required it and setup using 
 -app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:'hola'
}))
- after that we started to create,get and delete session
 - req.session.username ='lordsainath',
 - req.session.destroy(e=>console.log(e))

 -after that we stared to create , get and delete cookies
 - no need to install var cookieParser = require('cookie-parser'); because it is bydefault installed with express-generator
 - res.cookie(naam,value);
 - res.cookies() - // to get the cookies
 - res.clearCookie('naam') // to delete the cookie


 Date : 25/10/2025
 