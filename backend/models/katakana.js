import mongoose from 'mongoose';

const katakanaSchema = new mongoose.Schema({
    character: {
        type: String,
        required: true,
        // unique: true
    },
    romaji: {
        type: String,
        required: true
    },
   });

const Katakana = mongoose.model('Katakana', katakanaSchema);

export default Katakana;