import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const mongoUri = process.env.MONGODB_URI;
const jwtSecret = process.env.MY_SECRET_KEY;

if (!mongoUri) {
    console.error('MONGODB_URI is missing. Add it to backend/.env or your process environment.');
}

if (!jwtSecret) {
    console.warn('MY_SECRET_KEY is missing. Login and token verification will fail.');
}

import hiraganaRoutes from './route/hiragana.route.js';
import kanjiRoutes from './route/kanji.route.js';
import userRoutes from './route/user.route.js';
import getHiragana from './route/hiragana.route.js';
import getKanakata from './route/katakana.route.js';

const { seedKanji, seedHiragana, seedKanakata } = await import('./Data/initdata.js');

app.use(cors({
    origin : ['http://localhost:5173', 'https://kanji-project-d8kv.vercel.app'],
    credentials : true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (mongoUri) {
    mongoose.connect(mongoUri)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.log('MongoDB connection error:', err.message);
        process.exit(1);
    });
}

app.use(getHiragana);
app.use(kanjiRoutes);
app.use(userRoutes);
app.use(getKanakata);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


