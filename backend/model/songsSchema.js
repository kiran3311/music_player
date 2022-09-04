const mongoose = require("mongoose")

const Song = new mongoose.Schema({
    song: String,
    artwork:String,
    DateOfRelease:String,
    artist:String,
    //rating:Number
})

const model = mongoose.model('songs',Song)


module.exports = model