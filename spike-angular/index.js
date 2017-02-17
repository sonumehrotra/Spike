var express = require('express');

var app = new express();

app.use('/', express.static('./'))

app.listen(3000, function () {
  console.log('Spike app listening on port 3000! got to http://localhost:3000/')
})
