const express  = require('express');
const bodyparser  = require('body-parser');
const mongoose = require('mongoose');

const app = express();
 
app.use(bodyparser.json());
     
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://abcd123:abcd123@ds261136.mlab.com:61136/satwiktech',{useNewUrlParser:true});

require('./model/model');

app.use('/api',require('./router/routes'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`port running on port ${port}`);
});