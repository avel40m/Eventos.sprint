import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import { NotFound } from './NotFound';

export const ProtectedUser = () => {
    const {user} = useSelector((state) => state.user);
    console.log(user?.rol);
  return (
    <>
    {
        user?.rol == "USER" 
        ?
        <Outlet />
        :
        <NotFound title={"No tiene el rol para ver está pantalla"} />
    }
    </>
  )
}
