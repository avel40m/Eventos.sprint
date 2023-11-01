import React, { useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import { Form } from '../components/Form'
import { Layout } from '../layouts/Layout'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export const Home = ({ data }) => {
  const [categorias, setCategorias] = useState([])
  const [events, setEvents] = useState([]);
  const [filtrar, setFiltrar] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true)
    axios.get('src/data/data.json').then(response => {
      let evento = response.data.events
      setFiltrar([]);
      if (pathname == "/upcoming") {
        setEvents(evento.filter(evento => evento.estimate != undefined));
      } else if (pathname == "/past") {
        setEvents(evento.filter(evento => evento.assistance != undefined));
      } else {
        setEvents(evento);
      }
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      
    });
  }, [pathname])

  useEffect(() => {
    setCategorias(events.map(evento => evento.category).filter((elemento, indice, arreglo) => arreglo.indexOf(elemento) === indice));
  }, [events])

  useEffect(() => {
    if (filtrar.length == 0) {
      setFiltrar(events);
    } else {
      setFiltrar(filtrar);
    }
  }, [filtrar])

  return (
    <Layout data={data}>
      {
        loading
          ?
          <div className='loading'>
            <h1>Cargando </h1>
            <div>
              <span className="loader"></span>
            </div>
          </div>
          :
          <>
            <Form categorias={categorias} events={events} setFiltrar={setFiltrar} />
            <Cards filtrar={filtrar.length == 0 ? events : filtrar} />
          </>
      }
    </Layout>
  )
}
