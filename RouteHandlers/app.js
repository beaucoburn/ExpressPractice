const express = require('express')
const app = express()
const port = 3000

//A single calback function can handle a route
app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})

//More than one callback function can handle a route (make sure you specify the next object)
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

//An array of callback functions can handle a route
const cb0 = function (req, res, next){
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next){
  console.log('CB1')
  next()
}

const cb2 = function (req, res){
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
