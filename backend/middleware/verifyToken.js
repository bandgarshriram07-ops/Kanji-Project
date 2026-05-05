
import jwt from 'jsonwebtoken';
import Kanji from '../models/Kanji.js';

  const verifyToken = (req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Unauthorized1"});
    }
    try{
        const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({message: "Unauthorized2"});
    }
}
const isAdmin = (req,res,next) => {
    if(req.user.role === "admin"){
        return next();
    }else{
        return res.status(403).json({message: "Unauthorized3"});
    }
};

const isOwnerOrAdmin = async (req,res,next) => {
    const kanji = await Kanji.findById(req.params.id);

    if(!kanji){
        return res.status(404).json({message: "Kanji not found"});
    }
    if(!req.user){
        return res.status(401).json({message: "User not found"});
    }

    if(kanji.createdBy.toString() === req.user._id.toString() || req.user.role === "admin"){
        return next();
    }else{
        return res.status(403).json({message: "Unauthorized4"});
    }

}


export {verifyToken, isAdmin, isOwnerOrAdmin};