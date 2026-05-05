import Katakana from '../models/katakana.js'

export const getKanakata = async (req,res) => {
    try{
        const katakana = await Katakana.find({});
        res.json(katakana);
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
};