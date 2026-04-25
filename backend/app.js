const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Kanji = require('./models/Kanji');
const Hiragana = require("./models/hiragana")
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kanji-app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.get('/hiragana',async (req, res) => {
    try{
        const hiragana = await Hiragana.find({});
        res.json(hiragana);
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/kanji', async (req, res) => {
    try {
        const {jlpt} = req.query;
        let query = {};
        if (jlpt) {
            query.jlpt = jlpt;
        }
        const kanji = await Kanji.find(query);
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/api/kanji/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const kanji = await Kanji.findById(id);
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});