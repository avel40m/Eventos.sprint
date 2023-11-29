import React from 'react'
import { useSelector } from 'react-redux'
import { NotFound } from './NotFound';
import { Outlet } from 'react-router-dom';

export const ProtectedAdmin = () => {
    const {user} = useSelector((state) => state.user);
    return (
        <>
        {
            user?.rol != "ADMIN"
            ?
            <NotFound title={"No tiene permiso para ver la pagina"} />
            :
            <Outlet />
        }
        </>
  )
}
