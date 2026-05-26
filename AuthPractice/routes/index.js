var express = require("express");
const passport = require("passport");
var router = express.Router();
const localStrategy = require("passport-local");
const userMOdel = require("./users");
passport.use(new localStrategy(userMOdel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/profile", isLoggedin, (req, res) => {
  res.send("welcome to profile");
});

// register route
router.post("/register", (req, res) => {
  var userData = new userMOdel({
    username: req.body.username,
   
    secret: req.body.secret,
  });

  userMOdel.register(userData,req.body.pwd).then((registereduser)=>{
    passport.authenticate('local')(req,res,()=>{
      res.redirect('/profile')
    })
  })
  
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  (req, res) => {}
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
