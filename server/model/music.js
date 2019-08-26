const mongoose = require('mongoose')

const Schema = mongoose.Schema

var musicSchema = new Schema({
  id : String,
  name : String,
})

module.exports = musicSchema
