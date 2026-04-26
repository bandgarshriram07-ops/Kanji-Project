import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.jpg";
import AddKanji from '../components/Addkanji.jsx'

const Navbar = () => {
  return (
    <div className="flex  items-center p-4 bg-gray-800 text-white">
        <div className="">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        </div>
        <div className=" flex  items-center gap-4 sm:mx-auto sm:justify-center">
            <Link to="/" className="text-white hover:text-gray-300 font-bold">Home</Link>
            <Link to="/kanji" className="text-white hover:text-gray-300 font-bold">Kanji</Link>
            <Link to="/hiragana" className="text-white hover:text-gray-300 font-bold">Hiragana</Link>
            <Link to="/addkanji" className="text-white hover:text-gray-300 font-bold">Add Kanji</Link>
        </div>
    </div>
  )
}

export default Navbar