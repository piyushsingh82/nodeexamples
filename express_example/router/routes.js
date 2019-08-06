const routeapi = require("express").Router();

const mongoose  = require('mongoose');

const Users_data = mongoose.model("Users");

routeapi.get('/users',async (req,res)=>{
    try {
        const Users_detail = await Users_data.find({});
        res.send(Users_detail);
    } catch (error) {
        res.status(500);
    }
});

routeapi.get('/users/:srno',async (req,res)=>{
   try {
     const Users_detail = await Users_data.findOne({srno : req.params.srno});  
     res.send(Users_detail);
   } catch (error) {
       res.status(500);
   }

});

routeapi.put('/users/:userid',async (req,res)=>{
    try {
        const Users_detail = await Users_data.findByIdAndUpdate({_id : req.params.userid},
            req.body,
            {new:true,
            runValidators:true});  
      res.send(Users_detail);
    } catch (error) {
        res.status(500);
    } 
 });
 routeapi.post('/users',async(req,res)=>{
    
    try {
        const Users_detail = new Users_data();

        Users_detail.srno  = req.body.srno;
        Users_detail.firstname  = req.body.firstname;
        Users_detail.lastname   = req.body.lastname;
        Users_detail.email  = req.body.email;
        Users_detail.age = req.body.age;
        Users_detail.phone = req.body.phone;
        Users_detail.sex = req.body.sex;

        await Users_detail.save();
        res.send(Users_detail);
    } catch (error) {
        res.status(500);
    }
    
});

routeapi.delete('/users/:userid', async(req,res)=>{
    try {
        const Users_detail = await Users_data.findByIdAndRemove({_id:req.params.userid});
        res.send(Users_detail);
    } catch (error) {
        res.status(500);
    }
});
module.exports = routeapi;