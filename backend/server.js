import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

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

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174', 'https://kanji-project-d8kv.vercel.app'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`Blocked CORS origin: ${origin}`));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        const origin = req.headers.origin;
        if (!origin || allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin || 'http://localhost:5173');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            return res.sendStatus(204);
        }
    }
    return next();
});

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


