import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contacts } from './pages/Contacts';
import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Stasts } from './pages/Stasts';
import { Login } from './pages/Login';
import { Carrito } from './pages/Carrito';
import { ProtectedUser } from './pages/ProtectedUser';
import { ProtectedAdmin } from './pages/ProtectedAdmin';
import { Crear } from './pages/Crear';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data="Inicio" />} />
        <Route path='/upcoming' element={<Home data="Evento futuros"  />} />
        <Route path='/past' element={<Home data="Evento pasado"  />} />
        <Route path='/detail/:id' element={<Details data="Detalles" />} />
        <Route path='/contact' element={<Contacts data="Contactos"/>} />
        <Route path='/stast' element={<Stasts data="Estadisticas"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<ProtectedUser/>}>
          <Route path='carrito' element={<Carrito/>} />
        </Route>
        <Route path='/' element={<ProtectedAdmin/>}>
          <Route path='crear' element={<Crear />} />
        </Route>
        <Route path='*' element={<NotFound title={"Pagina no encontrada"}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
