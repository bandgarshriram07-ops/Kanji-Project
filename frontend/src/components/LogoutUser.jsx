import React from 'react'
import { logOutUser } from '../services/kanjiService'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LogoutUser = () => {
  const navigate = useNavigate();
  const {Logout : setUser} = useAuth();
  const handleLogout = async () => {
    try{
      const res = await logOutUser();
      setUser(null);
      navigate("/");
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }
  return (
     <div className='flex flex-col items-center justify-center gap-4 
     p-8 bg-gray-700 rounded-md shadow-md w-[40%] mx-auto mt-6 rounded-xl text-white'>
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout} className='bg-red-500 text-white p-2 rounded-md 
      border-none hover:bg-red-600 hover:text-white'>Logout</button>
     </div>
  )
}

export default LogoutUser