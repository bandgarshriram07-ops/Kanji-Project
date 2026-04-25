const mongoose = require('mongoose');

const HiraganaSchema = new mongoose.Schema({
    character :{
        type : String,
        require: true
    },
    romaji :{
        type : String,
        require: true
    },
    pronunciation:{
        type : String,
        require: true
    }
});

module.exports = mongoose.model("Hiragana",HiraganaSchema)