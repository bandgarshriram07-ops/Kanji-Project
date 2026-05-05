import User from '../models/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../service/generateToken.js';

export const register = async (req,res) => {
    try{
        const {name, email, password} = req.body;
       if(!name || !email || !password){
           return res.status(400).json({message: "Please provide all the required fields"});
       }
       const user = await User.findOne({email});
       if(user){
          return res.status(400).json({message: "Email already exists"});
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = await new User({name, email, password: hashedPassword});
       await newUser.save();
       res.status(201).json({message: "User created successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const login = async (req,res) => {
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid password"});
        }
        const cookie = generateToken(user);

        res.cookie("token",cookie,{
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1*60*60*24*30
        });
        res.json({message : "User logged in successfully", user : {id : user._id, email : user.email}});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const getMe =  (req,res) => {
    try{
        
        res.json({message : "User found successfully",
             user : {id : req.user._id, email : req.user.email, role : req.user.role}});

    }catch(err){
        res.status(500).json({message: err.message});
    }
};

export const logout = async (req,res) => {
    try{
        res.clearCookie("token");
        res.json({message : "User logged out successfully"});   
    }catch(err){
        res.status(500).json({message: err.message});
    }
}