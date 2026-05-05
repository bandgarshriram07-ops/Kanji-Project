import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/kanjiService";

export default function Register(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email : "",
        password : ""
    });
    const registerUser = async (e) => {
        e.preventDefault();
        const res = await register(userData);
        if(res.ok){
            alert("User registered successfully");
           
           setTimeout(() => {
            navigate("/login");
            }, 2000);
        }else{
            alert("User already registered");
            
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
        <div className="flex flex-col items-center   min-h-screen  w-screen ">
            <form className="flex flex-col items-center px-12 rounded-md shadow-md
            bg-gray-700  max-w-sm  rounded-xl
                h-[26rem] mt-12" onSubmit={registerUser}>
                <h2 className='text-3xl font-bold text-center text-white'>Register</h2>
                <div className=" w-full px-4 ">
                    <label htmlFor="name" className='block font-medium text-gray-700 mt-4 text-white'>Name </label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                    className='mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none'
                  />
                </div>
                <div className="px-4 w-full">
                    <label htmlFor="email" className='block font-medium text-gray-700 mt-4 text-white'>Email  </label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    className='mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none'
                  />
                </div>
                <div className="px-4 w-full">
                    <label htmlFor="password" className='block font-medium text-gray-700 mt-4 text-white'>Password </label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    className='mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none'
                  />
                </div>
                <button className='text-white bg-blue-500
            hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none
             w-full mt-6' type="submit">Register</button>
            </form>
           
        </div>
    )
    };
    
