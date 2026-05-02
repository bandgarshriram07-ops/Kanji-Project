import express from 'express';
const app = express();
import mongoose from 'mongoose';
import hiraganaRoutes from './route/hiragana.route.js';
import cors from 'cors';
import kanjiRoutes from './route/kanji.route.js';
import userRoutes from './route/user.route.js';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/kanji-app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use(hiraganaRoutes);
app.use(kanjiRoutes);
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
