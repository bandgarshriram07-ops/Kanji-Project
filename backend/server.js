import express from 'express';
const app = express();
import mongoose from 'mongoose';
import hiraganaRoutes from './route/hiragana.route.js';
import cors from 'cors';
import kanjiRoutes from './route/kanji.route.js';
import userRoutes from './route/user.route.js';
import  getHiragana from "./route/hiragana.route.js";
import getKanakata from "./route/katakana.route.js";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import { seedKanji, seedHiragana, seedKanakata } from './Data/initdata.js';

app.use(cors({
    origin : ["http://localhost:5173", "https://kanji-project-topaz.vercel.app","https://kanji-project-d8kv.vercel.app"],
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{console.log('MongoDB connected')
        //   seedKanji();
        // seedHiragana();
        // seedKanakata()
})
.catch(err => console.log(err));


app.use(getHiragana);
app.use(kanjiRoutes);
app.use(userRoutes);
app.use(getKanakata);

app.listen(3000, () => {
    console.log('Server is running on port 3000');});


