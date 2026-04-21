const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Kanji = require('./models/Kanji');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kanji-app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/kanji', async (req, res) => {
    try {
        const kanji = await Kanji.find();
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/kanji", async (req, res) => {
    const query = req.query.q;
    try {
        const kanji = await Kanji.find({
            $or: [
                { character: { $regex: query, $options: "i" } },
                { meaning: { $regex: query, $options: "i" } },
                { onyomi: { $regex: query, $options: "i" } },
                { kunyomi: { $regex: query, $options: "i" } }
            ]
        });
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});