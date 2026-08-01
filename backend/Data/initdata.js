import mongoose from 'mongoose';
import Kanji from '../models/Kanji.js';
import KanjiData from "./data.js";
import hiraganaData from "./hiraganaData.js"
import Hiragana from "../models/hiragana.js"
import KatakanaData from "./katakanaData.js"
import Katakana from "../models/katakana.js"
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{ console.log('MongoDB connected'); 
        // seedKanji();
        // seedHiragana();
        // seedKanakata();
    } )
    .catch(err => console.log(err)); 

export const seedKanji = async () => {
    try {
        await Kanji.deleteMany({});
        await Kanji.insertMany(KanjiData );
        console.log('Kanji data seeded successfully');
    }   catch (err) { 
        console.log('Error seeding kanji data:', err.message);
    }
};


export async function seedHiragana(){
    try{
        await Hiragana.deleteMany({});
        await Hiragana.insertMany(hiraganaData);
        console.log("Successfully Insert Hiragana data")
    }catch(err)
    {
         console.log('Error seeding kanji data:', err.message);
    }
};

 export async function seedKanakata(){
    try{
        await Katakana.deleteMany({});
        await Katakana.insertMany(KatakanaData);
        console.log("Successfully Insert katakana data")
    }catch(err)
    {
         console.log('Error seeding kanji data:', err.message);
    }
};
