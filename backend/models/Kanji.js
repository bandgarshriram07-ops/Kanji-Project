
const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({
    character: {
        type: String,
        required: true,
        // unique: true
    },
    meaning: {
        type: String,
        required: true
    },
    onyomi: {
        type: String
    },
    kunyomi: {
        type: String
    },
    jlpt :{
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    exampleWords: [{
        word: String,
        reading: String,
        meaning: String
    }]
});

module.exports = mongoose.model('kanji', kanjiSchema);