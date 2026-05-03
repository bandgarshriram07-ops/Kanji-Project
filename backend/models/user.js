import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import e from 'express';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role : {
    type : String,
    enum : ["admin", "user"],
    default : "user"
  }
}, { timestamps: true });
const User = mongoose.model("User", userSchema);

export default User;
