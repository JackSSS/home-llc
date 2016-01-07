var mongoose = require('mongoose');
var express = require('express');
var app = express();
var router = require(__dirname + '/routes/routes');

//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/home_llc');

app.use(express.static('build'));

app.use('/api', router);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});