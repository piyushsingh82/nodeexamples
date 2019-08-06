const mongoose  = require('mongoose');
const user_schema = mongoose.Schema({
    srno:Number,
    firstname :{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:String,
    age:Number,
    phone:Number,
    sex:String
})
module.exports = mongoose.model("Users",user_schema);