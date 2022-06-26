const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

app.use(express.json())

// import for .env
require('dotenv').config()

// import routes
const postRoute = require('./routes/posts')

app.use('/post',postRoute)

// route
app.get('/', (req,res) => {
  console.log('hi')
  res.send('hi')
})

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true})

app.listen(3000,() => console.log('server run'))