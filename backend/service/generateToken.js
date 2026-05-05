import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    const token = jwt.sign({_id : user._id , email: user.email, role : user.role},
         process.env.MY_SECRET_KEY, {expiresIn: "1d"});
    return token;
}