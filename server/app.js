const express = require ('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')

const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

var localhost = "mongodb://localhost:27017/codestack"
mongoose.connect(localhost, {useNewUrlParser: true})


const musicSchema = require('./model/music')
const Song = mongoose.model( 'song', musicSchema )

var music = []

// var users = ['dave','john','doe']
// var music = [
//   {'name' : 'music1'},
//   {'name' : 'music2'},
//   {'name' : 'music3'},
//   {'name' : 'music4'},
// ]

/////////////////////////////////////////////////// DATA GET
app.get('/', (req,res) => {
  res.send('Hello World!')
})

app.get('/student', ( req , res ) => {
  res.json( {'student' : students} )
})

app.get('/student/:id', ( req , res ) => {
  res.send(`Hello! ${req.params.id} `)
})


app.get('/music', ( req , res ) => {
  res.json( {'music' : music} )
})

app.get('/music/:id', ( req , res ) => {
  res.json( music[req.params.id] )
})

/////////////////////////////////////////////////// DATA POST

// ADD NEW MUSIC
app.post('/music', ( req , res ) => {
  // music.push( req.body )
  let item = new Music({
    name: req.params.name
  })

  item.save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })

  res.json( { 'added' : item } )
})

////////////////////////////////////////////////// DATA UPDATE

// UPDATE A MUSIC
app.put('/music/:id', ( req , res ) =>{
  music[req.params.id] = req.body
  res.json( { 'updated' : music[req.params.id] } )
})




///////////////////////////////////////////////////// START SERVER
app.listen(port, () => {
  console.log(`Example app listend on port ${port}`)
})
