const router = require('express').Router();
const BodyParser  = require('body-parser');
const mongoose = require("mongoose");

 //const path = require('path');

const urlEncodedParser  = BodyParser.urlencoded({extended:false});
const Userdetail = mongoose.model("users");
 

router.get('/list',async (req,res)=>{
try {
    const userdata = await Userdetail.find({});
 
    res.render('index',{ userdata:userdata });
      res.send(userdata);
  } catch (error) {
    res.status(500);
  }
});

router.get('/addrecord',(req,res)=>{
  res.render('Add_record');
});
router.post('/addrecord', urlEncodedParser, async (req,res)=>{
  console.log(req.body);
  try {
    const userdata = new Userdetail();
  userdata.srno = req.body.srno;
  userdata.firstname = req.body.firstname;
  userdata.lastname = req.body.lastname;
  userdata.email = req.body.email;
  userdata.age = req.body.age;
  userdata.phone = req.body.phone;
  userdata.sex = req.body.sex;
  await userdata.save();
 //res.send(userdata);
  console.log("all saved");
  res.redirect(301,'/app/list');
  } catch (error) {
    res.status(500);
  }
   
 // res.send('welcome, ' + req.body.username)
});

router.get('/edit/:id',async(req,res)=>{
  
  try {
    const userdata = await Userdetail.findById({_id:req.params.id});
    res.render('Update_record',{userdata:userdata});
    // res.send(userdata);
  } catch (error) {
    res.status(500);
  }
  
});
router.post('/updaterecord/:id',urlEncodedParser,async(req,res)=>{

  const Userdetails ={
    srno : req.body.srno,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone,
    sex: req.body.sex
  }
  try {
    const userdata = await Userdetail.findByIdAndUpdate(
      {_id:req.params.id}
      ,Userdetails,
      { new:true }
      );
  
   console.log(userdata);
  res.redirect(301,'/app/list');
   
  } catch (error) {
    res.status(500);
  }
});
router.put('/updaterecord/:id',async(req,res)=>{
  
  try {
    const userdata = await Userdetail.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
      console.log(userdata);
   res.send(userdata);
    
   
  } catch (error) {
    res.status(500);
  }
});

router.post('/list',async (req,res)=>{
 try {
   const userdata = new Userdetail();
    userdata.srno = req.body.srno;
    userdata.firstname = req.body.firstname;
    userdata.lastname= req.body.lastname;
    userdata.email= req.body.email;
    userdata.phone=req.body.phone;
    userdata.age=req.body.age;
    userdata.sex=req.body.sex;
    // res.sendFile(path.join( __dirname,'views' ,'index.html'));
    await userdata.save();
    // res.send(userdata);
     res.render('index');
 } catch (error) {
   res.status(500);
 }
});
 

//error handling using error 404
//router.delete() when using in postman and for form using router.get rest remains the same
router.get('/delete/:id',async(req,res,next)=>{
  try {
    const userdata = await Userdetail.findByIdAndDelete({_id:req.params.id});
    res.redirect(301,'/app/list');
    //res.send(userdata);
     } catch (error) {
    res.status(500);
  }

});

//error handling using error 404
router.get('/',(req,res,next)=>{
  
  res.status(404).send('we think you have requested the wrong url');
  });

module.exports = router;