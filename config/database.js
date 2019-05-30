var mongoose = require("mongoose");
var databaseUrl = require("./properties").database;

module.exports = function() {
  mongoose.connect(databaseUrl, {useNewUrlParser: true});

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("connected to mongodb");
  });
}


