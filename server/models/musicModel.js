// filepath: server/models/musicModel.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  artist: String,
  album: String,
  song: String,
  played: Number
})
// need i export si mongoose.model para magamit yung model sa app.js
module.exports = mongoose.model('songs', songSchema) // syntax mongoose.model(<tablename>, <schemaObject>)
