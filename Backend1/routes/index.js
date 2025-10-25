var express = require("express");
var router = express.Router();
const userModel = require("./users");
// const listEndpoints = require('express-list-endpoints');

/* GET home page. */
router.get("/", async function (req, res) {
  const totalcount = await userModel.countDocuments();
 

  res.render("index", { count: totalcount });
}); 


// flash message aapko ye allow karte hai ki hum is route mein bane huye data ko doosare rotue mein use kar sko
router.get('/login',(req,res)=>{
   
})
router.get('/failed',(req,res)=>{
  req.flash("username",'lordsainath');
  res.send("flash is set")
  
})

router.get('/checkkaro',(req,res)=>{
  console.log(req.flash("username"))
  res.send("hola")
  
})


// create a document
router.post("/createuser", async (req, res) => {
  const createUser = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  console.log(createUser);
  res.send(createUser);
});

// read document all
router.get("/getalluser", async (req, res) => {
  const alluser = await userModel.find();
  res.send(alluser);
});

// read doucment as per route per user
router.get("/getuser/:user", async (req, res) => {
  const user = req.params.user;
  const getuser = await userModel.findOne({ username: user });
  console.log(getuser);
  res.send(getuser);
});

// delte document as per route per user
router.get("/delete/:user", async (req, res) => {
  const user = req.params.user;
  console.log(user);
  const deleteUser = await userModel.findOneAndDelete({ username: user });
  if (deleteUser != null) {
    res.send("user is deleted successfully");
  } else {
    res.send("no user found");
  }
  // res.send("document deleted " , deleteUser)
});

// delete all user
router.get("/deletealluser", async (req, res) => {
  const deletealluser = await userModel.deleteMany({});
  console.log(deletealluser);
  res.send("deleted all user");
});
// const endpoints = listEndpoints(router);
// console.log(endpoints);

// session
router.get("/setsession", (req, res) => {
  req.session.authid = "bolakey";
  console.log(req.session.authid);
  res.send("here we are implementing session");
});
// get session
router.get("/getsession", (req, res) => {
  if (req.session.authid === "bolakey") {
    res.send("you are autharized person");
  } else {
    res.send("you are not authorized person");
  }
});
// delete session
router.get("/deletesession", (req, res) => {
  req.session.destroy((e) => console.log(e));
  res.send("session is removed");
});

// coookies
router.get("/setcookie", (req, res) => {
  res.cookie("username", 'lordsainath');
  console.log(res.cookie);
  res.send("we added cookies to browser");
});
// get cookies
router.get("/getcookie", (req, res) => {

  res.send(req.cookies);
});
// delete cookies
router.get("/deletecookie", (req, res) => {

  console.log(res.clearCookie('username'))
  res.clearCookie();
  res.send('cookies cleared')
});

module.exports = router;
