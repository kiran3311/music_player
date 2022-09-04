const express = require("express");
const router = express.Router()
const Song = require("../model/songsSchema")
const multer  = require('multer')
const fs = require("fs");
//const t = require("../../../../../Coding/mini project/Music Player/client/public/uploads")






const storage = multer.diskStorage({
    destination: (req,file,cb)=>{ cb(null, '../../../../../Coding/mini project/Music Player/client/public/uploads')},
    filename: (req,file,cb)=>{cb(null, file.originalname)}
})


const upload = multer({storage:storage})


router.post('/add', upload.single('artwork'),(req,res)=>{
    const songData = new Song({
        song:req.body.song,
        artwork:req.file.originalname,
        /*artwork:{
            data: fs.readFileSync("uploads/"+ req.file.filename),
            contentType:"image/png"
        },*/
        DateOfRelease:req.body.DateOfRelease,
        artist:req.body.artist,
        //rating:req.body.rating

    })

    songData.save()
    .then((res)=>{console.log('songdata saved')})
    .catch((err)=>{console.log("error",err)})
    res.send('song saved')
})



module.exports= router