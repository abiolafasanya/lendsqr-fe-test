import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../hooks/useAuth'

const Protected = () => {
    const {auth} = UseAuth();
    const location  = useLocation();

  return (
    <>
        {auth?.isLoggedIn ? 
        <Outlet />: 
        <Navigate to="/login" state={{ from: location }} replace />}
    </>
  )
}

export default Protected