import React from 'react';
import './style.css';

import { NotFound } from '../NotFound';
import { useDispatch, useSelector } from 'react-redux';
import carritoActions from '../../store/actions/carritoActions';
import toast from 'react-hot-toast';

export const Card = ({loading,event}) => {
    const {user} = useSelector((state) => state.user);
    const {carrito} = useSelector((state) => state.carrito);
    const dispatch = useDispatch();

    const agregarAlCarrito = () => {
        let filtrar = carrito.filter(element => element._id === event[0]._id);
        if (filtrar.length !== 0) {
            toast.error("El evento esta agregado al carrito")
        } else {
            toast.success("Se agrego el evento al carrito");
            dispatch(carritoActions.agregarCarrito(event));
        }
    }
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
                    event?.length == 0 ?
                    <NotFound title={"Evento no encontrado"} />
                    :
                    <section className='card-details'>
                        <div className="imagen">
                            <img src={event[0].image} alt={event[0].name} />
                        </div>
                        <div className="card-body">
                            <div>
                                <h2>{event[0].name}</h2>
                                <h4>Categoria: {event[0].category}</h4>
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
                            {
                                user?.rol ? 
                            <div className='carrito'>
                                <button className='agregar-carrito'
                                onClick={() => agregarAlCarrito()}
                                >
                                <i className="fa-solid fa-cart-shopping"></i>
                                     Agregar al carrito
                                </button>
                            </div>
                            :
                            ""
                            }
                        </div>
                    </section>
            }
        </>
    
    )
}
