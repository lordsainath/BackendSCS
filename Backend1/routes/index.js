var express = require("express");
var router = express.Router();
const userModel = require("./users");
// const listEndpoints = require('express-list-endpoints');


/* GET home page. */
router.get("/", async function (req, res) {
  const totalcount = await userModel.countDocuments();
  const getalluser = await userModel.find();

  res.render("index", { count: totalcount, getalluser });
});

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

module.exports = router;
