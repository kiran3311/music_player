const express = require("express");
const router = express.Router()
const Artist = require("../model/artistSchema")

router.post('/addartist', (req,res)=>{
    const artistData = new Artist({
        Artist:req.body.Artist,
        Dob:req.body.Dob,
        Bio:req.body.Bio
      

    })

    artistData.save()
    .then((res)=>{console.log('Artist data saved')})
    .catch((err)=>{console.log("error",err)})
    res.send('Artist saved')
})
module.exports= router