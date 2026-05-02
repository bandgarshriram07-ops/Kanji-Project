import mongoose from 'mongoose';

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

export default mongoose.model("Hiragana",HiraganaSchema)