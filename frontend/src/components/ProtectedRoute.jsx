import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
 const ProtectedRoutes = ({children}) => {
  const {user} = useAuth();
  if(!user){
    return <Navigate to="/login" />
  }
  return children;
}

 const AdminRoutes = ({children}) => {
  const {user} = useAuth();
  if(!user || user.role !== "admin"){
    return <Navigate to="/login" />
  }
  return children;
}

export {ProtectedRoutes, AdminRoutes}