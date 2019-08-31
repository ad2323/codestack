// filepath: server/app.js

// (import variable from '<your-library>') es5+ import
// common js import statement
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const port = 3000
// your songs collection or table na galing sa models folder
const musicModel = require('./models/musicModel')
// para sa mga naka cloud => mongodb+srv://<user>:<password>@mydatabase-rppom.mongodb.net/<database_name>?retryWrites=true&w=majority
// sa mga naka cloud, i enable ang allow access everwhere sa network access / whitelist sa left side para maacess natin si database
// para sa mga naka shell or community server (ui) => mongodb://127.0.0.1:27017/music
mongoose.connect('mongodb://127.0.0.1:27017/music', {
  useNewUrlParser: true
})

// comment niyo to kasi para makuha ang music data tatawagin si Song na nanggaling kay "const Song = require('./models/musicModel')"
// dun sa models folder, siya na yung collection or table
// var song = new Song()
// console.log(song)

var users = ['dave', 'john', 'doe']
// var music = [
//   {name: "Faded"}, // index 0
//   {name: "Waka Waka"}, // index 1
//   {name: "Selfie"}
// ]

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/users', (req, res) => res.json(users))
app.get('/users/:userid', (req, res) => res.send(`Hello ${req.params.userid} From codestack`))
// music

// get request specific item
app.get('/music/:id', (req, res) => {
  // res.json(music[req.params.id])
  // SQL Statement => Select * from tblsong where id = req.params.id
  musicModel.findById(req.params.id).then(doc => {
    console.log(doc)
    res.send(doc)
  }).catch(err => {
    console.log(err)
  })
})
// put request / update
app.put('/music/:id', (req, res) => {
  // music[req.params.id] = req.body
  // res.send("A music has been updated")
  // SQL Statement => Update tblsong set name = req.body.name (syntax: column/field = value) where id = req.params.id
  console.log(req.body)
  // pwede rin gamiiin si findOneAndUpdate or si updateOne kasi pareho lang ang process
  musicModel.updateOne({
    _id: req.params.id
  }, req.body).then(
    res.send('A music has been updated!')
  )
})
// get request all items
app.get('/music', (req, res) => {
  // res.json(music)
  // SQL Statement => Select * from tblsong
  musicModel.find().then(doc => {
    console.log(doc)
    res.send(doc)
  }).catch(err => {
    console.log(err)
  })
})
// post request add item
app.post('/music', (req, res) => {
  console.log("data: ", req.body)
  // music.push(req.body)
  // res.status(200).send("a music has added")
  // Add a new song on the database
  // const song = new
  // SQL Statement => Insert into tblsong value name = req.body.name (syntax: column/field = value)
  musicModel({
    _id: new mongoose.Types.ObjectId(),
    artist: req.body.artist,
    album: req.body.album,
    song: req.body.song,
    played: req.body.played,
  }).save().then(result => {
    // si result callback function na nandito yung dinagdag na data
    console.log('result', result)
    res.status(200).send('A music has been added');
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    });
  })
})
// delete music request
app.delete('/music/:id', (req, res) => {
  console.log(req.params.id)
  // pwede rin gamitin si findByIdAndDelete or si deleteOne kasi pareho lang ang process
  // SQL Statement => Delete from tblsong  where id = req.params.id
  musicModel.deleteOne({
    _id: req.params.id
  }, req.body).then(
    res.send('A music has been Deleted!')
  )
})

function sendhello(req, res, next) {
  res.send('Hello !' + req.params.userid)
  next()
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
