import mongoose from 'mongoose';
import Kanji from '../models/Kanji.js';
import KanjiData from "./data.js";
import hiraganaData from "./hiraganaData.js"
import Hiragana from "../models/hiragana.js"


mongoose.connect('mongodb://localhost:27017/kanji-app')
    .then(() =>{ console.log('MongoDB connected'); 
        seedKanji();
        seedHiragana();
    } )
    .catch(err => console.log(err));

async function seedKanji() {
    try {
        await Kanji.deleteMany({});
        await Kanji.insertMany(KanjiData);
        console.log('Kanji data seeded successfully');
    }   catch (err) { 
        console.log('Error seeding kanji data:', err.message);
    }
};


async function seedHiragana(){
    try{
        await Hiragana.deleteMany({});
        await Hiragana.insertMany(hiraganaData);
        console.log("Successfully Insert Hiragana data")
    }catch(err)
    {
         console.log('Error seeding kanji data:', err.message);
    }
}
