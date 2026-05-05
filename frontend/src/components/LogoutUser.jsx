import React from 'react'
import { logOutUser } from '../services/kanjiService'
import { useAuth } from '../context/AuthContext'

const LogoutUser = () => {
  const {user,Logout : setUser} = useAuth();
  const handleLogout = async () => {
    try{
      const res = await logOutUser();
      setUser(null);
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <button onClick={handleLogout} className='bg-red-500 text-white p-2 rounded-md'>Logout1</button>
  )
}

export default LogoutUser