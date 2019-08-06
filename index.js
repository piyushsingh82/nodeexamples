const express  = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// adding middleware 
const app = express();

//app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({ extended: false });


mongoose.promise = global.promise;

mongoose.connect('mongodb://abcd123:abcd123@ds261136.mlab.com:61136/satwiktech',{useNewUrlParser:true})
.then(()=>{
    console.log("successfully connected to mlab database ");
})
.catch(err => {
    console.log("could not connect to database due to error ",err);
    process.exit;
});

require('./models/model');

app.use('/app',require('./routes/routes'));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
      setTimeout(function(){
     res.redirect(301,'/app/list');
    },5000);
  
})

const port = process.env.PORT || 3001
app.listen(port ,()=>{
    console.log(`Server is running port ${port}`);
})