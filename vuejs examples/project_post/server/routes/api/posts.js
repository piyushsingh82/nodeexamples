const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


//get post 
router.get('/',async(req,res)=>{
    const post = await loadpostscollection();
    res.send(await post.find({}).toArray() );
});

//add post 
router.post('/api/add',(req,res)=>{
    res.send("hello");
});
//delete post 

async function loadpostscollection(params) {
    const client = await mongodb.MongoClient.connect
    ('mongodb://abc123:abc123@ds155864.mlab.com:55864/vue_express',{useNewUrlParser:true});

    return client.db('vue_express').collection('posts');
}

module.exports = router;