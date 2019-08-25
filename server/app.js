const express = require ('express')
// var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// var url = "mongodb://localhost:27017/codestack";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


var users = ['dave','john','doe']
var musics = [
  {'name' : 'music1'},
  {'name' : 'music2'},
  {'name' : 'music3'},
  {'name' : 'music4'},
]

// DATA GET
app.get('/', (req,res) => {
  res.send('Hello World!')
})

app.get('/users', ( req , res ) => {
  res.json( {'users' : musics} )
})
app.get('/users/:userid', ( req , res ) => {
  res.send(`Hello! ${req.params.userid} `)
})

app.get('/musics', ( req , res ) => {
  res.json( {'musics' : musics} )
})

app.get('/musics/:name', ( req , res ) => {
  res.send(`Music ${req.params.name} is Great!`)
})

// DATA POST

// ADD NEW MUSIC
app.post('/music', ( req , res ) => {
  musics.push(req.body)
  res.json( { 'added' : req.body } )
})





function sendHello( req , res , next ){
  if ( req.params.userid ){
    next()
  }
  else{
    res.send(`Parameter userid not supplied`)
  }
}


app.listen(port, () => {
  console.log(`Example app listend on port ${port}`)
})
