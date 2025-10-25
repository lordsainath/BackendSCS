const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/practicing");

// const userSchema = mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   age: Number,
// });

// module.exports = mongoose.model("userModels", userSchema);

mongoose.connect("mongodb://127.0.0.1:27017/intermongodb");

const newSchema = mongoose.Schema({
  username:String,
  password:String,
  categories:{
    type:Array,
    default:[]
  },
  datecreated: {
     type:Date,
     default:Date.now()
  }
})

module.exports = mongoose.model('news',newSchema)
