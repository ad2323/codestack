const express = require ('express')
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

var url = "mongodb://localhost:27017/codestack";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

var users = ['dave','john','doe']
var music = [
  {'name' : 'music1'},
  {'name' : 'music2'},
  {'name' : 'music3'},
  {'name' : 'music4'},
]

/////////////////////////////////////////////////// DATA GET
app.get('/', (req,res) => {
  res.send('Hello World!')
})

app.get('/users', ( req , res ) => {
  res.json( {'users' : users} )
})

app.get('/users/:userid', ( req , res ) => {
  res.send(`Hello! ${req.params.userid} `)
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
  music.push( req.body )
  res.json( { 'added' : music.slice(-1)[0] } )
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
