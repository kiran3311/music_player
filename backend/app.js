const express = require("express");
const multer  = require('multer')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
require('./config/db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const postSong = require('./routes/postSongRoute')
app.use('', postSong)

const getSong = require('./routes/getSongRoute')
app.use('',getSong)

const postArtist = require("./routes/postArtistRoute")
app.use('',postArtist )

const getArtist = require("./routes/getArtistRoute")
app.use('', getArtist)

app.listen(5000, ()=>{console.log('server stated')})