const express = require('express')
const router = express.Router()

//middleware that is specific to the router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

//define the home page route
router.get('/', (req, res) => {
  res.send('Welcome to the home page')
})

//define the about page route
router.get('/about', (req, res) => {
  res.send('Welcome to the about page')
})

module.exports = router
