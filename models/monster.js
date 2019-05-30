var mongoose = require("mongoose")

var monsterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  description: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = monsterSchema

