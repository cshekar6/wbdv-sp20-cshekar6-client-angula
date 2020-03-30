const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wbdv-sp20-cshekar6-client-angular'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
                         '/dist/wbdv-sp20-cshekar6-client-angular/index.html'));});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
             "https://wbdv-sp20-cse-client-angular.herokuapp.com/");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
             "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.listen(process.env.PORT || 8080);
