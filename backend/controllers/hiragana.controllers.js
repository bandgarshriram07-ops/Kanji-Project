import Hiragana from "../models/hiragana.js";


export const getHiragana = async (req,res) => {
    try{
        const hiragana = await Hiragana.find({});
        res.json(hiragana);
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
};