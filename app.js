const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const ejslayout = require('express-ejs-layouts')
const mongo = require('mongoose')
var session = require('express-session')
const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config();

const path = require('path')

//--------use----------
//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({secret: 'dollerdozer',saveUninitialized: true,resave: true,name: 'dollerdozer'}));

//singel page
require('./routes/singel.js')(app)

//--------set----------
app.use(ejslayout)
app.use(express.static('public'))
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs')

//--------includes----------
require('./database/connection.js')(mongo)
require('./routes/web.js')(app)
require('./routes/api.js')(app)

//--------port----------
const PORT = process.env.PORT
const server = app.listen(PORT, ()=>{
    console.log(PORT) 
})

