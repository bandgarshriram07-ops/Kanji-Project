const mongoose = require('mongoose');
const Kanji = require('../models/Kanji');
const  KanjiData  = require("./data.js");
const hiraganaDta = require("./hiraganaData.js")
const Hiragana = require("../models/hiragana.js")


mongoose.connect('mongodb://localhost:27017/kanji-app')
    .then(() =>{ console.log('MongoDB connected'); 
        seedKanji();
        seedHiragana();
    } )
    .catch(err => console.log(err));

async function seedKanji() {
    try {
        await Kanji.deleteMany({});
        await Kanji.insertMany(KanjiData.data);
        console.log('Kanji data seeded successfully');
    }   catch (err) { 
        console.log('Error seeding kanji data:', err.message);
    }
};


async function seedHiragana(){
    try{
        await Hiragana.deleteMany({});
        await Hiragana.insertMany(hiraganaDta.data);
        console.log("Successfully Insert Hiragana data")
    }catch(err)
    {
         console.log('Error seeding kanji data:', err.message);
    }
}
