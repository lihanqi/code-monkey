const express = require('express');
const app = express();
const path = require('path');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://user:password@ds044689.mlab.com:44689/coj');

const restRouter = require('./routes/rest');

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api/v1', restRouter);
app.use(function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
})