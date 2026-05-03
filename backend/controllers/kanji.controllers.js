import Kanji from "../models/Kanji.js";
import User from "../models/user.js";


export const getKanji = async (req,res) => {
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
};

export const getKanjiById = async (req,res) => {
    const {id} = req.params;
    try {
        const kanji = await Kanji.findById(id);
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
}
};

export const createKanji = async (req,res) => {
    try{
        const {character, meaning, onyomi, kunyomi, jlpt, exampleWords} = req.body;
    const kanji = new Kanji({character, meaning, onyomi, kunyomi, jlpt, exampleWords,createdBy: req.user._id});
    await kanji.save();
    res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteKanji = async (req,res) => {
    const {id} = req.params;
    try {
        const kanji = await Kanji.findById(id);
        if(!kanji){
            return res.status(404).json({message: "Kanji not found"});
        }
        if(kanji.createdBy.toString() !== req.user._id.toString()){
            return res.status(403).json({message: "Unauthorized"});
        }
        await Kanji.findByIdAndDelete(id);
        res.json(kanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateKanji = async (req,res) => {
    const {id} = req.params;
    try {
        const kanji = await Kanji.findById(id);
        if(!kanji){
            return res.status(404).json({message: "Kanji not found"});
        }
        if(kanji.createdBy.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Unauthorized"});
        }
        
    
        const updatedKanji = await Kanji.findByIdAndUpdate(id,req.body,{new : true});
        res.json(updatedKanji);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};