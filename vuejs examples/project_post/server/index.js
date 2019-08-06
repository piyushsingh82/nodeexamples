const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware to use express 
app.use(bodyparser.json);
app.use(cors());

const posts = require('./routes/api/posts.js');
app.use('/api/posts',posts);


const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server started on port ${port}`));
