const mongoose = require('mongoose')

const Schema = mongoose.Schema

var studentSchema = new Schema({
  id : String,
  name : String,
})

module.exports = studentSchema
