const mongoose = require("mongoose")

const Artist = new mongoose.Schema({
    Artist: String,
    Dob:String,
    Bio:String,
   
})

const model = mongoose.model('Artist', Artist)


module.exports = model