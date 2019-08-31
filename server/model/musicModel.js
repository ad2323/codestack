// filepath: server/models/musicModel.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
})
// need i export si mongoose.model para magamit yung model sa app.js
