Date:- 22/10/2025

// First We initialized the folder by using npm init.We also created Readme.md file to write down the notes.

<!-- package -->
- Package is a resuable code which is written by another developer whcih will help another developers to write the code fastly.

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
- to run the server we have to lister to the server by providing the port number
- we are also started to learn the routing in http server - (req.url) - condition
- we also learn to how to use nodemon


<!-- Express -->
- cmd - npm i expressdddd
- we requir it in the file also call the function
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
- we installed third party middleware which is morgan.we required morgan
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
- first we creat a public folder and include the stylsheet in it to render anything we have to pass it from backend to do so we have to expressServer.use(express.static('public'))