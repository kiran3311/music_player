const express = require("express");
const router = express.Router()
const Song = require("../model/songsSchema")



router.get('/', async (req,res)=>{
    const songData = await Song.find()
    res.json(songData)
})


module.exports= router