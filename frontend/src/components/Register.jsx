import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/kanjiService";

export default function Register(){
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        email : "",
        password : ""
    });
    const registerUser = async (e) => {
        e.preventDefault();
        const res = await register(userData);
        if(res.ok){
            setSuccess("User registered successfully");
            setError("");
           setTimeout(() => {
            navigate("/login");
            }, 2000);
        }else{
            setError("User already registered");
            setSuccess("");
        }
        setUserData({
            name: "",
            email : "",
            password : ""
        });
    };
    const handleChange = (e) => {
        
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

     return(
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-[#f2d492]">
            <h1>Register</h1>
            {success && <div className="text-green-800 font-bold text-xl">{success}</div>}
            {error && <div className="text-red-500 font-bold text-xl">{error}</div>}
            <form className="flex flex-col items-center justify-center gap-4
             bg-white p-8 rounded-md shadow-md w-[50%] mx-auto rounded-xl  
             bg-sky-100 hover:bg-sky-200" onSubmit={registerUser}>
                <h2>Register</h2>
                <div className="flex items-center justify-center gap-2 w-full">
                    <label htmlFor="name">Name : </label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 w-full">
                    <label htmlFor="email">Email : </label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 w-full">
                    <label htmlFor="password">Password : </label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Register</button>
            </form>
           
        </div>
    )
    };
    
