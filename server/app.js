const express = require ('express')
const app = express()
const port = 3000


app.get('/', (req,res) => {
  res.send('Hello World!')
})

app.get('/users/:userid', sendHello, ( req , res ) => {
  res.send(`Hello! ${req.params.userid} `)
})

app.post('/music/:userid', sendHello, ( req , res ) => {
  res.send(`Hello! ${req.params.userid} `)
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
