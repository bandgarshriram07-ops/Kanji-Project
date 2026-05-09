import React ,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import { useAuth } from "../context/AuthContext";
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
   const [open, setOpen] = useState(false);
   const {user} = useAuth();   

   
  return (
     <nav className="bg-purple-500 text-white sticky top-0 z-50">
     
      <div className="h-16 flex items-center  md:justify-between">
        <div className="px-6 flex items-center justify-space-between">
         <Link to="/"><img src={logo} alt="logo" className="w-12 h-12 rounded-full" /></Link>
         <Link to="/kanji" className="no-underline text-inherit"><h2 className=" md:hidden text-2xl font-bold text-white ml-16">Kanji </h2></Link>
        </div>
         <div className="hidden md:block">
            <Link to="/" className=" text-lg px-4 no-underline text-inherit text-white font-semibold">Home</Link>
            <Link to="/kanji" className="  text-lg px-4 no-underline text-inherit font-semibold">Kanji</Link>
            <Link to="/hiragana" className=" no-underline text-inherit text-lg px-4 font-semibold">Hiragana</Link>
            <Link to="/katakana" className=" no-underline text-inherit text-lg px-4 font-semibold">Katakana</Link>
            <Link to="/addKanji" className="  no-underline text-inherit font-semibold">Add Kanji</Link>
            <Link to="/register" className="  text-lg px-4 no-underline text-inherit font-semibold">Register</Link>
        </div>
        <div className=" flex items-center ml-auto md:mr-8">
         <Link to="/login" className="bg-blue-500 text-white px-4 py-2
            rounded-full hover:bg-blue-600 no-underline text-inherit">Login</Link>
              <button className="px-4 text-2xl leading-none block cursor-pointer md:hidden 
                 border-none outline-none bg-purple-500 font-bold hight-line-2xl" onClick={() => setOpen(!open)}>
                <ListIcon />
             </button>
        </div>
      </div>
           {/* response nav */}
          <div className={`${open ? "block" : "hidden"} md:hidden  bg-gray-200 space-y-2 pb-3`}>
          <div className="flex flex-col gap-4 p-4 text-black">
            <Link to="/" className=" hover:text-gray-500 block no-underline text-inherit">Home</Link>
            <Link to="/kanji" className="hover:text-gray-500  block no-underline text-inherit">Kanji</Link>
            <Link to="/hiragana" className="hover:text-gray-500 block no-underline text-inherit">Hiragana</Link>
            <Link to="/katakana" className="hover:text-gray-500 block no-underline text-inherit">Katakana</Link>
            <Link to="/addKanji" className="hover:text-gray-500 block no-underline text-inherit">Add Kanji</Link>
            <Link to="/register" className="hover:text-gray-500 block no-underline text-inherit">Register</Link>
            <Link to="/logout"   className="hover:text-gray-500 block no-underline text-inherit">Logout</Link>
          </div>
        </div>
    
      </nav>

  )
};

export default Navbar;