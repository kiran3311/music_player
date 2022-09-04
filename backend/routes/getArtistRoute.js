const express = require("express");
const router = express.Router()
const Artist = require("../model/artistSchema")



router.get('/artist', async (req,res)=>{
    const artistData = await Artist.find()
    res.json(artistData)
})


module.exports= router