const express = require('express');
const app = express();

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://user:password@ds044689.mlab.com:44689/coj');

const restRouter = require('./routes/rest');

app.use('/api/v1', restRouter);

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
})