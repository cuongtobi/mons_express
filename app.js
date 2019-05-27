var express = require("express");
var log = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(log("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
});

app.use(function(error, req, res, next){
  if(!error) {
    next();
  } else {
    res.status(500).send({message: error.message});
  }
});

app.use("/", function(req, res, next) {
  res.send("hello");
})

var port = 8080;
app.listen(port, function(){
  console.log("connected on port " + port);
});
