import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contacts } from './pages/Contacts'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Stasts } from './pages/Stasts'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data="Inicio" />} />
        <Route path='/upcoming' element={<Home data="Evento futuros" />} />
        <Route path='/past' element={<Home data="Evento pasado" />} />
        <Route path='/detail/:id' element={<Details data="Detalles" />} />
        <Route path='/contact' element={<Contacts data="Contactos"/>} />
        <Route path='/stast' element={<Stasts data="Estadisticas"/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
