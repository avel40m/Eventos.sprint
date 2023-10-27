import React, { useEffect, useState } from 'react'
import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Card = () => {
    const [event, setEvent] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('https://mindhub-xj03.onrender.com/api/amazing')
            .then(resp => setEvent(resp.data.events.filter(event => event._id == id)))
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <>

            {
                loading ?
                    <div className='loading'>
                        <h1>Cargando </h1>
                        <div>
                            <span className="loader"></span>
                        </div>
                    </div>
                    :
                    <section className='card-details'>
                        <div className="imagen">
                            <img src={event[0].image} alt={event[0].name} />
                        </div>
                        <div className="card-body">
                            <div>
                                <h4>{event[0].name}</h4>
                                <h6>Categoria: {event[0].category}</h6>
                            </div>
                            <p>{event[0].description}</p>
                            <div className='card-footer'>
                                <h5>Precio: {event[0].price}</h5>
                                <h5>Capacidad: {event[0].capacity}</h5>
                                {
                                    event[0].assistance
                                        ? <h5>Asistencia: {event[0].assistance}</h5>
                                        : <h5>Estimado: {event[0].estimate}</h5>
                                }
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}
