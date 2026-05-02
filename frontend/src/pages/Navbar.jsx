import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   const navigate = useNavigate();
  const hadleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
   
  return (
    <nav className="navbar navbar-expand-lg bg-slate-900">
       <div className="flex  items-center p-4 bg-gray-800 text-white">
        <div className="">
         <Link to={"/"}><img src={logo} alt="logo" className="w-10 h-10 rounded-full" /></Link>
        </div>
        <div className=" flex  items-center gap-4 sm:mx-auto sm:justify-center">
            <Link to="/" className="text-white hover:text-gray-300 font-bold">Home</Link>
            <Link to="/kanji" className="text-white hover:text-gray-300 font-bold">Kanji</Link>
            <Link to="/hiragana" className="text-white hover:text-gray-300 font-bold">Hiragana</Link>
            <Link to="/addKanji" className="text-white hover:text-gray-300 font-bold">Add Kanji</Link>
            <Link to="/register" className="text-white hover:text-gray-300 font-bold">Register</Link>
            <Link to="/login" className="text-white hover:text-gray-300 font-bold">Login</Link>
            <button onClick={hadleLogout} className="text-white hover:text-gray-300 font-bold bg-red-500
             rounded-full px-4 py-2">Logout</button>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;